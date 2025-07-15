import React from 'react';
import './intro.css';
import bg from '../../assets/Akhonan.png';
import btnImg from '../../assets/hireme.png';
import Resume from '../../assets/Akhona_Ndaba.pdf';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm{' '}
          <motion.span
            className="introName"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
          >
            Akhona.
          </motion.span>
          <br />
          <TypeAnimation
            sequence={[
              'Software Developer',
              2000,
              'Web Developer',
              2000,
              'UX/UI Designer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="animatedTitle"
          />
        </span>
        <p className="introPara">
          Explore my projects and let's create something amazing together!
        </p>
        <a href={Resume} target="_blank" rel="noopener noreferrer">
          <button className="btn">
            <img src={btnImg} alt="Resume" className="btnImg" />
            Download Resume
          </button>
        </a>
      </div>
      <div className="div">
      <motion.img
  src={bg}
  alt="Profile"
  className="bg"
  initial={{ scale: 1.2, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 2, ease: "easeOut" }}
/>
      </div>
    </section>
  );
};

export default Intro;
