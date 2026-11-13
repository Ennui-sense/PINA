import MainLayout from "~/layouts/MainLayout/MainLayout";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Cases from "./sections/Cases/Cases";
import Approach from "./sections/Approach/Approach";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Cases />
      <Approach />
    </MainLayout>
  );
};

export default HomePage;
