import Body from "./Component/Body";
import { Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
import { Provider } from "react-redux";
import { store } from "./store/appStore";
import Feed from "./Component/Feed";
import Profile from "./Component/Profile";
import Connections from "./Component/Connections/UserConnections";
import UserConnectReq from "./Component/Connections/UserConnectReq";
import Premium from "./Component/Premium";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/connections" element={<Connections />} />
          <Route path="/requests" element={<UserConnectReq />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;

// once user logn=in again data is needed to fetch by user profile
// make constant file for path.
