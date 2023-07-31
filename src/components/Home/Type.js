import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Data Engineer",
          "AI/ML Engineer",
          "Mobile App Developer",
          "Passionate Traveller",
          "Leader",
          "Problem Solver",
          "Continuous Learner"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
