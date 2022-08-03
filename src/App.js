import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import UserSkills from "./pages/UserSkills/UserSkills";
import UserList from "./pages/UserList/UserList";
import MainFooter from "./components/MainFooter/MainFooter";

function App() {
  return (
    <>
      <NavBar />
      <UserSkills />
      <MainFooter title="Your Endava Employees Manager" />
    </>
  );
}

export default App;
