import { Outlet } from "react-router-dom"
import Header from "./Header"
import { StyledPage } from "./main.style"
import Footer from "./Footer"

const Layout = (windowHeight) => {
  const footerHeight = 180

  return(
    <div className="app-container">
      <Header />
      <StyledPage height={windowHeight.pageMinimumHeight - footerHeight}>
        <Outlet />
      </StyledPage>
      <Footer />
    </div>
  )
}

export default Layout
