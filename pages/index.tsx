import Section from "../components/mid-section";
import RightSection from "../components/rightSection";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Crypto App</title>
      </Head>
      <main className="flex">
        <Section />
        <RightSection />
      </main>
    </div>
  );
};

export default Home;
