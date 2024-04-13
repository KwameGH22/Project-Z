import React from 'react';
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header';


const Layout = () => {
  return (
    <div>
      <Header activeLinks={activeLinks}/>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default Layout
