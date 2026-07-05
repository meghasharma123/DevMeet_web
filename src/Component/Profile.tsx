import { useSelector } from "react-redux";
import { RootState } from "../store/appStore";
import EditProfile from "./EditProfile";

export default function Profile() {
  const userData = useSelector((store: RootState) => store.user);

  return <>{userData && <EditProfile userData={userData} />}</>;
}
