import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/appStore";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../util/constants";
import { removeUser } from "../store/userSlice";

export default function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store: RootState) => store.user);

  const handleLogOut = async () => {
    try {
      await axios.post(`${BASE_URL}/logout`, {}, { withCredentials: true });
      dispatch(removeUser());
      return navigate("/login");
    } catch (error) {
      console.log("err: ", error);
    }
  };

  return (
    <div className="navbar bg-base-300 shadow-sm">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost text-xl">
          👩‍💻DevMeet
        </Link>
      </div>
      {user && (
        <div className="flex gap-2 items-center">
          <div>Welcome, {user.firstName}</div>

          <div className="dropdown dropdown-end mx-4">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img src={user.photoUrl} />
              </div>
            </div>
            <ul className="menu menu-sm dropdown-content bg-base-300 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <Link to={"/profile"} className="justify-between">
                  Profile
                </Link>
              </li>
              <li>
                <Link to={"/connections"}>Connections</Link>
              </li>
              <li>
                <button onClick={() => handleLogOut()}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
