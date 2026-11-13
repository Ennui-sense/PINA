import MainLayout from "~/layouts/MainLayout/MainLayout";

import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Cases from "./sections/Cases/Cases";
import Approach from "./sections/Approach/Approach";
import Price from "./sections/Price/Price";

import Cta from "~/sections/Cta/Cta";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Cases />
      <Approach />
      <Price />
      <Cta />
    </MainLayout>
  );
};

export default HomePage;
