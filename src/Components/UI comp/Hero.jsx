import React, { useState, useEffect } from "react";
import avatar from "../../assets/images/profile-avatar.png";
import { SBtn } from "../Reusable comp/SBtn";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion"; // Changed from 'motion/react' to 'framer-motion'
import { viewVariantXM, viewVariantXP } from "../Reusable comp/Variant";

export const Hero = () => {
  const phrases = ["Frontend Developer", "React Developer", "UI Designer"];
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        setTypingSpeed(50);
      } else {
        setText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        setTypingSpeed(100);
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <>
      <style>{`
        .typewriter-text {
          background: linear-gradient(90deg, #6EE7B7, #3B82F6, #9333EA);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: bold;
          animation: gradientMove 3s ease infinite;
        }
        .cursor {
          display: inline-block;
          color: white;
          animation: blink 0.8s steps(1) infinite;
          font-weight: bold;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
        @keyframes gradientMove {
          0% {
            background-position: 0%;
          }
          100% {
            background-position: 100%;
          }
        }
      `}</style>
      <div className="container hero-section my-5">
        <div className="row align-items-center overflow-hidden">
          <motion.div
            variants={viewVariantXM}
            initial="hidden"
            whileInView="show"
            exit="exit"
            viewport={{ amount: 0.5 }} // Change to "some" or remove entirely
            className="order-last order-md-first col-12 col-md-6 d-flex flex-column align-items-start gap-3 p-5"
          >
            <h1 className="fw-bolder display-4">Hi, I'm <span className="fw-bold text-warning">Harshit</span></h1>
            <h4 className="mt-2">
              A&nbsp;
              <span className="typewriter-text">{text}</span>
              <span className="cursor">|</span>
            </h4>
            <div className="d-flex gap-4 mt-3">
              <SBtn text="About Me" />
              <SBtn text="Download CV" />
            </div>
            <div>
              <div className="d-flex gap-3 social-icons">
                <a href="" className="text-white text-decoration-none">
                  <div className="p-1">
                    <FaGithub />
                  </div>
                </a>
                <a href="" className="text-white text-decoration-none">
                  <div className="p-1">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a href="" className="text-white text-decoration-none">
                  <div className="p-1">
                    <SiLeetcode />
                  </div>
                </a>
                <a href="" className="text-white text-decoration-none">
                  <div className="p-1">
                    <FaInstagram />
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
          <div className="order-first order-md-last col-12 col-md-6 d-flex justify-content-center">
            <motion.img
              variants={viewVariantXP}
              initial="hidden"
              whileInView="show"
              exit="exit"
              viewport={{ amount: 0.5 }} // Change to "some" or remove entirely
              className="img-fluid rounded-pill dropShadow w-75"
              src={avatar}
              alt="Profile Avatar"
            />
          </div>
        </div>
      </div>
    </>
  );
};