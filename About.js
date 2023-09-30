import HeroSection from "./components/HeroSection";

const About = () => {

  const data = {
    name: "Synthia Ecommerce",
  };

  return (
    <>

      <HeroSection myData={data} />
    </>
  );
};

export default About;