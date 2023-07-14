import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import Footer from "../footer/Footer"
import Haeder from "../header/Haeder"


const Layout = () => {
  return (
  <Fragment>
    <Haeder/>
    <main className="main">
        <div className="container">
            <Outlet/>
        </div>
    </main>
    <Footer/>
  </Fragment>
  )
}

export default Layout