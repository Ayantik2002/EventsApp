import React from 'react'
import { Header } from '../header/header'

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default MainLayout
