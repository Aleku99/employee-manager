import React from "react";

import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import UserSkills from "./pages/UserSkills/UserSkills";
import UserList from "./pages/UserList/UserList";
import ReportScreen from "./pages/ReportScreen/ReportScreen";
import MainFooter from "./components/MainFooter/MainFooter";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [searchInput, setSearchInput] = React.useState("");
  const [currentUser, setCurrentUser] = React.useState({});

  const handleUserSkills = (employee) => {
    setCurrentUser(employee);
  };

  return (
    <>
      <BrowserRouter>
        <NavBar onInputChange={setSearchInput} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <UserList
                filterSearch={searchInput}
                handleUserSkill={handleUserSkills}
              />
            }
          />
          <Route
            path="/user-skills"
            element={<UserSkills currentUser={currentUser} />}
          />
          <Route path="/reports" element={<ReportScreen />} />
        </Routes>
        <MainFooter title="Your Endava Employees Manager" />
      </BrowserRouter>
    </>
  );
}

export default App;
