import React from 'react'
import { Outlet } from 'react-router-dom';

import MainFooter from '../MainFooter/MainFooter';
import NavBar from '../NavBar/NavBar';

const MainScreen = (props) => {
  const {setSearchInput} = props;

  return (
    <div>
      <NavBar onInputChange={setSearchInput} />
      <Outlet />
      <MainFooter title="Your Endava Employees Manager" />
    </div>
  )
}

export default MainScreen