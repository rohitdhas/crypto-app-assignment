import type { NextPage } from "next";
import Head from "next/head";
import Section from "../components/section";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Crypto App</title>
      </Head>
      <main>
        <Section />
      </main>
    </div>
  );
};

export default Home;
