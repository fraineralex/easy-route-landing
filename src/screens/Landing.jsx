import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Features from "../components/Sections/Features";
import We from "../components/Sections/We";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <We />
      <Services />
      <Features />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}

