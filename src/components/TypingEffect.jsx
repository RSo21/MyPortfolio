import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const TypingEffect = () => {
  return (
    <ReactTypingEffect className="typing-effect"
      text="HELLO WORLD" //text=["Hello.", "World!"]
    />
  );
};

export default TypingEffect;