import { Outlet } from "react-router-dom";
import {Footer } from "../container";
import { Navbar } from '../components'

const Layout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout