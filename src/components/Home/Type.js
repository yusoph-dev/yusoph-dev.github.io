import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Engineer",
          "AI-Integrated Web Developer",
          "Cybersecurity & Data Privacy Advocate",
          "Tech Speaker & Mentor",
          "MERN Stack Developer",
          "LaraVue Stack Developer",
          "React-AdonisJS Developer",
          "Cloud & DevOps Enthusiast",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 5,
      }}
    />
  );
}

export default Type;
