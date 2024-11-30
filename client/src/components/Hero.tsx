import React, { useEffect, useRef } from "react";
import { ArrowDown, Code2, Laptop, Server, Mail } from "lucide-react";
import Typed from "typed.js";
import { HeroShapes } from "./shapes/Shapes";

const Hero: React.FC = () => {
  const nameRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (nameRef.current) {
      const typed = new Typed(nameRef.current, {
        strings: ["Abdulrahman Emad", "Full Stack Dev"],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-16 overflow-hidden"
    >
      <HeroShapes />
      <div className="container mx-auto px-6 py-16 text-center relative z-10">
        <div className="flex justify-center gap-4 mb-8">
          <Code2 className="w-8 h-8 text-blue-600 animate-pulse" />
          <Laptop className="w-8 h-8 text-blue-600 animate-pulse delay-100" />
          <Server className="w-8 h-8 text-blue-600 animate-pulse delay-200" />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Hi, I'm <span ref={nameRef} className="text-blue-600"></span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
          A passionate Full Stack Developer crafting innovative solutions and
          exceptional digital experiences
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 flex items-center"
          >
            <Code2 className="w-5 h-5 mr-2" />
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 flex items-center"
          >
            <Mail className="w-5 h-5 mr-2" />
            Get in Touch
          </a>
        </div>

        <div className="mt-16">
          <ArrowDown className="w-6 h-6 mx-auto text-blue-600 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
