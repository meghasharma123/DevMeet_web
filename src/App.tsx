import Body from "./Component/Body";
import { Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
import { Provider } from "react-redux";
import { store } from "./store/appStore";
import Feed from "./Component/Feed";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Feed />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
