import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar.js";
import Footer from "./Footer.js";
import axios, { AxiosError } from "axios";
import { BASE_URL } from "../util/constants.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/appStore.js";
import { addUser } from "../store/userSlice.js";

export default function Body() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store: RootState) => store.user);

  const handleFetchProfile = async () => {
    try {
      if (userData) return;
      const resp = await axios.get(`${BASE_URL}/profile/view`, {
        withCredentials: true,
      });
      dispatch(addUser(resp.data));
    } catch (err) {
      const error = err as AxiosError;
      if (error.status === 401) {
        navigate("/login");
      }
      console.log("error", error);
    }
  };

  useEffect(() => {
    handleFetchProfile();
  }, []);

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
