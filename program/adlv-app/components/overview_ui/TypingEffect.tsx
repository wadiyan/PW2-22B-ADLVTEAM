"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function TypingEffect() {
  return (
    <>
      <Typewriter
        words={[
          "Welcome to ADLV Store!",
          "Belanja Online Jadi Lebih Mudah dan Menyenangkan",
          "Welcome to ADLV Store!",
        ]}
        loop={1}
        cursor
        cursorStyle="|"
        typeSpeed={100}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </>
  );
}
