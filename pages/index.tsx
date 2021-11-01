import type { NextPage } from "next";
import Image from "next/image";
import Hero from "../src/components/site1/Hero/Hero";
import Navbar from "../src/components/site1/Navbar/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
