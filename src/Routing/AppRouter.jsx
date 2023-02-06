import { Route, Routes } from "react-router-dom";
import FirstChallenge from "../Pages/FirstChallenge";
import Home from "../Pages/Home";
import SecondChallenge from "../Pages/SecondChallenge";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/first-challenge" element={<FirstChallenge />} />
      <Route path="/second-challenge" element={<SecondChallenge />} />
    </Routes>
  );
};

export default AppRouter;
