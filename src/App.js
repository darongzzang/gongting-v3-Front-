import LandingPage from "./LandingPage";
import Login from "./Login";
import Signup from "./Signup";
import SignupInfo from "./SignupInfo";
import {Routes, Route, BrowserRouter, Link } from "react-router-dom";


function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/SignupInfo" element={<SignupInfo />} />
      </Routes>
  );
}

export default App;
