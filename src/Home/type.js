import React from 'react';
import Typewriter from 'typewriter-effect';

function Type() {
  return (
    <Typewriter
      options={{
        strings: ['Software Engineer', 'Developer', 'Web Developer', 'Mobile App Dev'],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
