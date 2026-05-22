import Header from "./components/Header";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Decide from "./components/Decide";
import CTA from "./components/CTA";
import VideoSection from "./components/VideoSection";
import Shape from "./components/Shape";
import WhatYouGet from "./components/WhatYouGet";
import Individuals from "./components/Individuals";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import AICover from "./components/AICover";
import FAQ from "./components/FAQ";
import LastCover from "./components/LastCover";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import Framer from "./components/Framer";
import AnimateOnScroll from "./components/AnimateOnScroll";



export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AnimateOnScroll><Brands /></AnimateOnScroll>
      <AnimateOnScroll><Decide /></AnimateOnScroll>
      <AnimateOnScroll><CTA /></AnimateOnScroll>
      <AnimateOnScroll><VideoSection /></AnimateOnScroll>
      <AnimateOnScroll><Process /></AnimateOnScroll>
      <AnimateOnScroll><Shape /></AnimateOnScroll>
      <AnimateOnScroll><WhatYouGet /></AnimateOnScroll>
      <AnimateOnScroll><Individuals /></AnimateOnScroll>
      <AnimateOnScroll><Pricing /></AnimateOnScroll>
      <Framer />
      <AnimateOnScroll><Reviews /></AnimateOnScroll>
      <AnimateOnScroll><AICover /></AnimateOnScroll>
      <AnimateOnScroll><FAQ /></AnimateOnScroll>
      <AnimateOnScroll><LastCover /></AnimateOnScroll>
      <AnimateOnScroll><Footer /></AnimateOnScroll>
    </main>
  );
}
