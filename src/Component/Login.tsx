import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const req = {
        emailId: emailId,
        password: password,
      };
      const resp = await axios.post(`http://localhost:3000/login`, req, {
        withCredentials: true,
      });
      console.log("resp: ", resp);
    } catch (error) {
      console.log("error login: ", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-full pt-5">
      <div className="card w-96 bg-base-200 shadow-sm flex items-center justify-center">
        <div className="card-body">
          <div className="mt-4">
            <div className="flex flex-col">
              Email ID
              <input
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                type="text"
                placeholder="Email"
                className="input w-70"
              />
            </div>
            <div className="mt-4 flex flex-col">
              Password
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="input w-70"
              />
            </div>
          </div>
          <div className="mt-6">
            <button
              onClick={() => handleLogin()}
              className="btn btn-primary btn-block"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
