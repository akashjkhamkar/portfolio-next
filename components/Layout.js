import Head from 'next/head'
import NavBar from "./Navbar";
import Footer from "./Footer";

const Layout = ({children}) => {
    return (
      <>
        <Head>
          <meta name="robots" content="all" />
          <title>Akash Khamkar | Fullstack Web Developer</title>
          <meta name="description" content="Hi I am Akash, I am Software Developer and this is my portfolio website. Here you can find updates related to me, my projects and blogs. I have created songs-like-that, tourpaper, gitlet, byow, NoteArc"/>
          <meta name="keywords" content="portfolio site, Akash, Akash Khamkar, Khamkar, personal website, javascript developer, pune, software developer, fullstack, ratnagiri, india, portfolio ui, akashjkhamkar, akash j khamkar, Akash Jitendra Khamkar" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="author" content="Akash Khamkar" />
          <meta name="copyright" content="Akash Khamkar" />

          {/* OPEN GRAPH */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Akash Khamkar" />
          <meta property="og:url" content="https://www.akashkhamkar.in/" />
          <meta property="og:image" itemProp="image" content="https://www.akashkhamkar.in/siteimg.png"/>

        </Head>
        <div className="megacontainer">
          <div className="subcontainer">
              <NavBar/>
              {children}
          </div>
          <Footer/>
        </div>
      </>
    )
}

export default Layout;