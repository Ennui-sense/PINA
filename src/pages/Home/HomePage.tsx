import MainLayout from "~/layouts/MainLayout/MainLayout";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
    </MainLayout>
  );
};

export default HomePage;
