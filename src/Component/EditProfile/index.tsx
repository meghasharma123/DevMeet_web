import { useState } from "react";
import { UserType } from "../../types/User";
import UserCad from "../BasicComponent/UserCard";
import { BASE_URL } from "../../util/constants";
import axios, { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import Notify from "../BasicComponent/Notify";
import { addUser } from "../../store/userSlice";

export default function EditProfile({ userData }: { userData: UserType }) {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState(userData.firstName);
  const [lastName, setLastName] = useState(userData.lastName);
  const [age, setAge] = useState(userData.age);
  const [gender, setGender] = useState(userData.gender);
  const [about, setAbout] = useState(userData.about);
  const [photoUrl, setPhotoUrl] = useState(userData.photoUrl);
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleSave = async () => {
    try {
      setError("");
      const resp = await axios.patch(
        `${BASE_URL}/profile/edit`,
        {
          firstName,
          lastName,
          age,
          gender,
          about,
          photoUrl,
        },
        { withCredentials: true },
      );
      
      dispatch(addUser(resp.data.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      const error = err as AxiosError;
      setError(error.response?.data as string);
      console.log("error: ", error);
    }
  };

  return (
    <>
      <div className="flex justify-center my-2 gap-3 overflow-auto">
        <div className="card w-96 bg-base-300 shadow-sm flex items-center justify-center">
          <div className="card-body">
            <div className="mt-4">
              <div className="flex flex-col">
                FirstName
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  placeholder="FirstName"
                  className="input w-70"
                />
              </div>
              <div className="mt-4 flex flex-col">
                LastName
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  placeholder="LastName"
                  className="input w-70"
                />
              </div>

              <div className="mt-4 flex flex-col">
                Photo Url
                <input
                  value={photoUrl}
                  onChange={(e) => setPhotoUrl(e.target.value)}
                  type="text"
                  className="input w-70"
                />
              </div>

              <div className="flex flex-col">
                Age
                <input
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  type="text"
                  className="input w-70"
                />
              </div>
              <div className="mt-4 flex flex-col">
                Gender
                <input
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  type="text"
                  className="input w-70"
                />
              </div>

              <div className="mt-4 flex flex-col">
                About
                <input
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  type="text"
                  className="input w-70"
                />
              </div>
            </div>

            <div className="text-red-600">{error}</div>
            <div className="mt-6">
              <button
                onClick={() => handleSave()}
                className="btn btn-primary btn-block"
              >
                Save Profile
              </button>
            </div>
          </div>
        </div>
        <UserCad ele={{ firstName, photoUrl, about }} />
      </div>
      {showToast && <Notify msg="Profile Updated" />}
    </>
  );
}
