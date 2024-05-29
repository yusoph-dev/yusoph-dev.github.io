import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Web Developer",
          "Freelancer",
          "Self-taught MERN Stack Developer",
          "LaraVue Stack Developer",
          "Wordpress Developer",
          "React-AdonisJs Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 5,
      }}
    />
  );
}

export default Type;
