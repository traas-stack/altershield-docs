import React, { useState, useEffect } from 'react';
import styles from './TypeWriter.css'

const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (textIndex < text.length) {
        setDisplayText(text.substring(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [text, textIndex]);

  return (
    <div>
      <p>{displayText}</p>
    </div>
  );
};

export default Typewriter;
