import axios from "axios";
import { BASE_URL } from "../util/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../store/feedSlice";
import { RootState } from "../store/appStore";
import UserCad from "./BasicComponent/UserCard";

export default function Feed() {
  const dispatch = useDispatch();
  const feed = useSelector((store: RootState) => store.feed);

  const getFeed = async () => {
    try {
      const resp = await axios.get(`${BASE_URL}/user/feed`, {
        withCredentials: true,
      });
      dispatch(addFeed(resp.data.data));
    } catch (error) {
      console.log("error get feed: ", error);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <div className="flex items-center justify-center mt-5">
      {feed && feed.map((ele) => <UserCad key={ele.emailId} ele={ele} />)}
    </div>
  );
}
