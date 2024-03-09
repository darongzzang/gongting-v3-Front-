import LandingPage from "./LandingPage";
import Login from "./Login";
import SignIn from "./SignIn";
import {Routes, Route, BrowserRouter, Link } from "react-router-dom";


function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
  );
}

export default App;
