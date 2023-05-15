import "./App.css";
import { LandingPage } from "./pages/LandingPage.jsx";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/*" Component={LandingPage} />
      </Routes>
    </>
  );
}

export default App;
