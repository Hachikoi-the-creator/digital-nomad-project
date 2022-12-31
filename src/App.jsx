import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";

export default function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/login"} element={<Login />} />
      {/* <Route path={"*"} element={<Custom404 />} /> */}
    </Routes>
  );
}
