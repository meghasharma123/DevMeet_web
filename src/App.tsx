import Body from "./Body"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/login" element={<div>Login</div>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
