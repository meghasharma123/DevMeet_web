import Body from "./Body"
import { Routes, Route } from "react-router-dom"
import Login from "./Login"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/login" element={<Login/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App

// while facing cors error, we have to install cors and add options for the dev url and inside axios also add helper enable.