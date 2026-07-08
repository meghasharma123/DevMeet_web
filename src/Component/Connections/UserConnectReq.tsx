import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../util/constants";
import { RootState } from "../../store/appStore";
import { addRequests, removeRequests } from "../../store/requestSlice";

export default function UserConnectReq() {
  const dispatch = useDispatch();
  const requests = useSelector((store: RootState) => store.requests);

  const reviewRequest = async (status: string, id: string) => {
    try {
      await axios.post(
        BASE_URL + "/request/review/" + status + "/" + id,
        {},
        { withCredentials: true },
      );

      dispatch(removeRequests(id));
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const fetchConnectionsReq = async () => {
    try {
      if (requests) return;
      const resp = await axios.get(`${BASE_URL}/user/requests`, {
        withCredentials: true,
      });

      dispatch(addRequests(resp.data));
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    fetchConnectionsReq();
  }, []);

  if (!requests) return;

  if (requests.length === 0)
    return <h1 className="flex justify-center my-10"> No Requests Found</h1>;

  return (
    <div className="text-center my-10 ">
      <h1 className="text-bold text-white text-3xl">Connection Requests</h1>

      {requests.map((request) => {
        const { _id, firstName, lastName, photoUrl, age, gender, about } =
          request.fromUserId;

        return (
          <div
            key={_id}
            className=" flex justify-between items-center m-4 p-4 rounded-lg bg-base-300 w-fit  mx-auto"
          >
            <div>
              <img
                alt="photo"
                className="w-20 h-20 rounded-full"
                src={photoUrl}
              />
            </div>
            <div className="text-left mx-4 ">
              <h2 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p>{about}</p>
            </div>
            <div className="flex">
              <button
                className="btn btn-primary mx-2"
                onClick={() => reviewRequest("rejected", request._id)}
              >
                Reject
              </button>
              <button
                className="btn btn-secondary mx-2"
                onClick={() => reviewRequest("accepted", request._id)}
              >
                Accept
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
