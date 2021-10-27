import About from "/components/About/About";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://akashkhamkar.in/" />
      </Head>
      <About/>
    </>
  )
}

export default Home;