import MainLayout from "~/layouts/MainLayout/MainLayout";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Cases from "./sections/Cases/Cases";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Cases />
    </MainLayout>
  );
};

export default HomePage;
