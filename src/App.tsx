import Body from "./Component/Body";
import { Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
import { Provider } from "react-redux";
import { store } from "./store/appStore";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
