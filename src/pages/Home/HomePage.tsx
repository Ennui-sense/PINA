import "./HomePage.scss";
import MainLayout from "~/layouts/MainLayout/MainLayout";

import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Cases from "./sections/Cases/Cases";
import Faq from "./sections/Faq/Faq";
import Price from "./sections/Price/Price";
import Request from "./sections/Request/Request";

import Cta from "~/sections/Cta/Cta";

const HomePage = () => {
  return (
    <MainLayout>
      <title>PINA. | Главная</title>

      <Hero />
      <About />
      <Cases />
      <Faq />
      <Price />
      <Cta />
      <Request />
    </MainLayout>
  );
};

export default HomePage;
