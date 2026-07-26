import axios from "axios";
import { BASE_URL } from "../../util/constants";
import { useDispatch } from "react-redux";
import { removeFeed } from "../../store/feedSlice";

interface Props {
  ele: {
    _id: string;
    firstName: string;
    photoUrl: string;
    about: string;
  };
}

export default function UserCad({ ele }: Props) {
  const dispatch = useDispatch();
  const { _id, firstName, photoUrl, about } = ele;

  async function handleSendRequest(status: string, userId: string) {
    try {
      await axios.post(
        `${BASE_URL}/request/send/` + status + "/" + userId,
        {},
        { withCredentials: true },
      );
      dispatch(removeFeed(userId));
    } catch (error) {
      console.log("error: " + error);
    }
  }

  return (
    <div className="card bg-base-300 w-96 shadow-sm">
      <figure>
        <img src={photoUrl} alt={firstName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName}</h2>
        <p>{about}</p>
        <div className="card-actions justify-center">
          <button
            className="btn btn-primary"
            onClick={() => handleSendRequest("ignored", _id)}
          >
            Ignore
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleSendRequest("interested", _id)}
          >
            Like
          </button>
        </div>
      </div>
    </div>
  );
}
