import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import ParallaxAnimation from "../components/AnimationUI/ParallaxAnimation";
import Solutions from "../components/Solutions/Solutions";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Project-X</title>
        <meta
          name="Project-X"
          content="Your everything solutions in assistance"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <Navbar />
        <ParallaxAnimation parallaxSpeed=".7" src="/bg1.png" height="100vh" />
        <Solutions />
        <ParallaxAnimation
          src="/bg2.jpg"
          backgroundAttachment="fixed"
          height="50vh"
        />
        <About />
      </div>
    </div>
  );
}
