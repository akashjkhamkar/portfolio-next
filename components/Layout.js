import Head from 'next/head'
import NavBar from "./Navbar";
import Footer from "./Footer";

const Layout = ({children}) => {
    return (
      <>
        <Head>
          <title>akash khamkar</title>
        </Head>
        <div className="megacontainer">
          <div className="subcontainer">
              <NavBar/>
              {children}
              <Footer/>
          </div>
        </div>
      </>
    )
}

export default Layout;