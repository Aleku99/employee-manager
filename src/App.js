import React, {useState} from "react";

import "./App.css";

import UserSkills from "./pages/UserSkills/UserSkills";
import UserList from "./pages/UserList/UserList";
import ReportScreen from "./pages/ReportScreen/ReportScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainScreen from './components/Layout/MainScreen';

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [currentUser, setCurrentUser] = useState({});

  const handleUserSkills = (employee) => {
    setCurrentUser(employee);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainScreen setSearchInput={setSearchInput} />}>
            <Route
              index
              element={
                <UserList
                  filterSearch={searchInput}
                  handleUserSkill={handleUserSkills}
                />
              }
            />
            <Route
              path="user-skills"
              element={<UserSkills currentUser={currentUser} />}
            />
            <Route path="reports" element={<ReportScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
