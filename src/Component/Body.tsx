import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar.js";
import Footer from "./Footer.js";
import axios, { AxiosError } from "axios";
import { BASE_URL } from "../util/constants.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/appStore.js";
import { addUser } from "../store/userSlice.js";
import { useState } from "react";

export default function Body() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userData = useSelector((store: RootState) => store.user);

  const [isLoading, setIsLoading] = useState(true);

  const handleFetchProfile = async () => {
    try {
      const resp = await axios.get(`${BASE_URL}/profile/view`, {
        withCredentials: true,
      });
      console.log("res: ", resp);
      dispatch(addUser(resp.data));
    } catch (err) {
      const error = err as AxiosError;

      console.log("error", error);

      if (error.status === 401) {
        navigate("/login");
      }
      console.log("error", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetchProfile();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <div className="flex-1">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
