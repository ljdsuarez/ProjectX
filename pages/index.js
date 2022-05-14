import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Project-X</title>
        <meta
          name="Project-X"
          content="Your everything solutions in assistance"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.bg1}>
      </div>
      <Navbar />
    </div>
  );
}
