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
      if (feed) return;

      const resp = await axios.get(`${BASE_URL}/user/feed`, {
        withCredentials: true,
      });
      dispatch(addFeed(resp.data));
    } catch (error) {
      console.log("error get feed: ", error);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if (!feed) return;

  if (feed.length <= 0)
    return <h1 className="flex justify-center my-10">No new users founds!</h1>;

  return (
    <div className="flex items-center justify-center mt-5">
      <UserCad ele={feed[0]} />
    </div>
  );
}
