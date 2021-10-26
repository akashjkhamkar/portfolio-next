import Head from 'next/head'
import NavBar from "./Navbar";
import Footer from "./Footer";

const Layout = ({children}) => {
    return (
      <>
        <Head>
          <meta name="robots" content="all" />
          <title>Akash Khamkar | Fullstack Web Developer</title>
          <meta name="keywords" content="portfolio site, Akash, Akash Khamkar, Khamkar, personal website, javascript developer, pune, software developer, fullstack, ratnagiri, india, portfolio ui, akashjkhamkar, akash j khamkar, Akash Jitendra Khamkar" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="author" content="Akash Khamkar" />
          <meta name="copyright" content="Akash Khamkar" />

          {/* <!-- HTML Meta Tags --> */}
          <title>Akash Khamkar</title>
          <meta name="description" content="Hi I am Akash, I am Software Developer. This is my portfolio website. Here you can find updates related to me, my projects and blogs. "/>

          {/* <!-- Facebook Meta Tags --> */}
          <meta property="og:url" content="https://akashkhamkar.in/"/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="Akash Khamkar"/>
          <meta property="og:description" content="Hi I am Akash, I am Software Developer. This is my portfolio website. Here you can find updates related to me, my projects and blogs. "/>
          <meta property="og:image" content="https://akashkhamkar.in/siteimg.png"/>

          {/* <!-- Twitter Meta Tags --> */}
          <meta name="twitter:card" content="summary_large_image"/>
          <meta property="twitter:domain" content="akashkhamkar.in"/>
          <meta property="twitter:url" content="https://akashkhamkar.in/"/>
          <meta name="twitter:title" content="Akash Khamkar"/>
          <meta name="twitter:description" content="Hi I am Akash, I am Software Developer. This is my portfolio website. Here you can find updates related to me, my projects and blogs. "/>
          <meta name="twitter:image" content="https://akashkhamkar.in/siteimg.png"/>

          {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --> */}
                


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