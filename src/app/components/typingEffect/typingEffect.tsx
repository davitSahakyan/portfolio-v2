"use client"

import { useState, useEffect } from "react";
import './typingEffect.css'

interface ITypingEffect {
    textArray: string[];
    typingSpeed: number;
    deletingSpeed: number;
    pauseTime: number;
}

const TypingEffect = ({ textArray, typingSpeed = 150, deletingSpeed = 100, pauseTime = 1500 }: ITypingEffect) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = textArray[currentTextIndex];

      if (isDeleting) {
        setDisplayText((prev) => prev.slice(0, -1));

        if (displayText === "") {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
        }
      } else {
        setDisplayText((prev) => currentText.slice(0, prev.length + 1));

        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    };

    const typingInterval = setInterval(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearInterval(typingInterval);
  }, [displayText, isDeleting, textArray, typingSpeed, deletingSpeed, pauseTime, currentTextIndex]);

  return <div>
      <span>{displayText}</span>
      <span className="cursor">|</span>
    </div>;
};

export default TypingEffect;