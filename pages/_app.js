import '../styles/Content.css'
import '../styles/Cover.css'
import '../styles/Navbar.css'
import '../styles/Projects.css'
import '../styles/Stack.css'
import '../styles/App.css'
import '../styles/index.css'
import '../styles/Blogs.css'
import '../styles/Footer.css'
import '../styles/Socials.css'
import Layout from "/components/Layout.js"

function MyApp({ Component, pageProps }) {
  return ( 
    // <ThemeProvider theme={theme}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    // </ThemeProvider>
  )
}

export default MyApp
