import NavBar from "./Navbar";
import Footer from "./Footer";

const Layout = ({children}) => {
    return (
      <div className="megacontainer">
        <div className="subcontainer">
            <NavBar/>
            {children}
            <Footer/>
        </div>
      </div>
    )
}

export default Layout;