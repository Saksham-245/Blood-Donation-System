import React from "react";
import ImageCarousel from "../components/carousel/ImageCarousel";
import Footer from "../components/footer/footer";
import NavBar from "../components/Navbar/Navbar";
const Home = () => {
  return (
    <div>
      <NavBar />
      <ImageCarousel />
      <Footer />
    </div>
  );
};

export default Home;
