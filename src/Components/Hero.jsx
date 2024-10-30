import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroContainer, Slide, Content, ControlButton, Controls } from "./Hero.styled";
import img1 from "../images/img-1.jpg";
import img2 from "../images/img-2.jpg";
import img3 from "../images/img-3.jpg";
import img4 from "../images/img-4.jpg"; 

const slides = [
  {
    id: 1,
    title: "Welcome to Our Company",
    description: "We offer the best solutions for your interior.",
    background: img1,
  },
  {
    id: 2,
    title: "Modern Design",
    description: "Our design is always in trend.",
    background: img2,
  },
  {
    id: 3,
    title: "Support 24/7",
    description: "We provide 24/7 support to assist you anytime.",
    background: img3,
  },
  {
    id: 4,
    title: "Join Us Today",
    description: "Be part of our growing community.",
    background: img4,
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <HeroContainer>
      <AnimatePresence mode="wait">
        {slides.map((slide, index) =>
          index === currentSlide ? (
            <Slide
              key={slide.id}
              background={slide.background}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8 }}
            >
              <Content>
                <motion.h1
                  initial={{ opacity: 0, y: -50 }} 
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  style={{ fontSize: "3rem", color: "#fff" }} 
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: -100 }} 
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 0.4 }}
                  style={{ fontSize: "1.5rem", color: "#fff" }} 
                >
                  {slide.description}
                </motion.p>
              </Content>
            </Slide>
          ) : null
        )}
      </AnimatePresence>
      <Controls>
        <ControlButton onClick={prevSlide}>Previous</ControlButton>
        <ControlButton onClick={nextSlide}>Next</ControlButton>
      </Controls>
    </HeroContainer>
  );
};

export default Hero;

