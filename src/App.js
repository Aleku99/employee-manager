import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import UserSkills from "./pages/UserSkills/UserSkills";
import UserList from "./pages/UserList/UserList";
import ReportScreen from "./pages/ReportScreen/ReportScreen";
import MainFooter from "./components/MainFooter/MainFooter";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<UserList />} />
          <Route path="/user-skills" element={<UserSkills />} />
          <Route path="/reports" element={<ReportScreen />} />
        </Routes>
        <MainFooter title="Your Endava Employees Manager" />
      </BrowserRouter>
    </>
  );
}

export default App;
