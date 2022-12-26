import Head from 'next/head';
import Script from 'next/script';

import Nav from "../Comps/Nav";
import Homes from "../Comps/Home";
import About from "../Comps/About";
import Project from "../Comps/Project";
import Skill from "../Comps/Skill";
import Connect from "../Comps/connect";
import Footer from "../Comps/Footer";
import Info from "../Comps/Info";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        {/* <Script src='/function.js' strategy="lazyOnload"/> */}
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css'
        />
        <link rel='icon' href='./images/me2.png' type='image/x-icon'></link>
        <script src='https://code.jquery.com/jquery-3.5.1.min.js' defer></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.11/typed.min.js' defer></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js' defer></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js' defer></script>
      </Head>
      <Script src='/function.js' strategy="lazyOnload"/>
      <Nav />
      <Homes />
      <About />
      <Info />
      <Skill />
      <Project />
      <Connect />
      <Footer />
      
    </div>
  );
}
