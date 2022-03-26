import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';
import { HomeContainer } from '../styles/HomeStyles'
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Experiences from '../components/Experiences';
import Projects from '../components/Projects';
import Knowledges from '../components/Knowledge';
import FormContact from '../components/FormContact';
import Footer from '../components/Footer';


export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, [])

  return (
    <HomeContainer>
      <Head>
        <title>Home | My Portfolio</title>
        <meta
          name="description"
          content="I'm a front-end developer living in Cork and here I present some projects developed by me!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="I'm a front-end developer living in Cork and here I present some projects developed by me!"
        />
      </Head>


      <Header />;
      <main className="container">
        <HomeHero />
        <Experiences />
        <Projects />
        <Knowledges />
        <FormContact />
      </main>
      <Footer />
    </HomeContainer>
  )

}
