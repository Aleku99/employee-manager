import React from "react";

import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import UserSkills from "./pages/UserSkills/UserSkills";
import UserList from "./pages/UserList/UserList";
import MainFooter from "./components/MainFooter/MainFooter";

function App() {
  const [searchInput, setSearchInput] = React.useState("");

  return (
    <>
      <NavBar onInputChange={setSearchInput} />
      <UserList filterSearch={searchInput} />
      <MainFooter title="Your Endava Employees Manager" />
    </>
  );
}

export default App;
