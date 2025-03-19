import React from "react";
import Layout from "../layout"; 
import Navbar from "@/components/NavBar";
import Services from "./Services";
import About from "./about";
import Projects from "./Projects";
import HomeSection from "./HomeSection";
import SkillsMarquee  from "@/components/SkillsMarquee";
import Footer from '@/components/Footer';



const HomePage = () => {
  return (
    <Layout>
      <div className="scroll-smooth w-11/12 mx-auto">
        <Navbar />

        <section id="home" className="pt-12 px-4 sm:px-8 md:px-16 lg:px-24">
          <HomeSection />
        </section>
      </div>

      <div className="-mt-8 relative w-[104vw] left-[50%] -translate-x-[50%] overflow-hidden">
        <SkillsMarquee />
      </div>

      <div className="scroll-smooth w-4/5 mx-auto">
        <section id="services" className="mt-8 sm:mt-12 md:mt-16 mb-12 sm:mb-16 md:mb-24 mx-4 sm:mx-8 md:mx-16 lg:mx-20">
          <Services />
        </section>

        <section id="about" className="-mt-8 relative w-[104vw] left-[50%] -translate-x-[50%] overflow-hidden min-h-screen flex items-center justify-center bg-main-green text-black">
          <About />
        </section>

        <section id="projects" className="mt-8 sm:mt-12 md:mt-16 mb-12 sm:mb-16 md:mb-24 mx-4 sm:mx-8 md:mx-16 lg:mx-20">
          <Projects />
        </section>

        <section id="testimonials" className="min-h-screen flex items-center justify-center bg-gray-100 text-black px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Testimonials</h2>
        </section>
      </div>

      <Footer />
    </Layout>
  );
};

export default HomePage;
