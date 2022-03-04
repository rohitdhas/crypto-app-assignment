import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Crypto App</title>
      </Head>
      <main className={styles.main}>
        <h1 className="text-center font-bold text-4xl text-blue-500">
          Hello World!
          <i className="bi-alarm"></i>
        </h1>
      </main>
    </div>
  );
};

export default Home;
