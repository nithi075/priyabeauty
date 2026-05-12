import "./About.css";
import coupleImg from "../../assets/about1.jpg";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="about">

      {/* LEFT IMAGE */}
      <motion.div
        className="about-left"

        initial={{
          opacity: 0,
          x: -80,
          scale: 0.95
        }}

        whileInView={{
          opacity: 1,
          x: 0,
          scale: 1
        }}

        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1]
        }}

        viewport={{ once: true }}
      >
        <img src={coupleImg} alt="The Wedding Story" />
        <div className="fade-overlay"></div>
      </motion.div>

      {/* RIGHT CONTENT */}
      <motion.div
        className="about-right"

        initial={{
          opacity: 0,
          y: 60
        }}

        whileInView={{
          opacity: 1,
          y: 0
        }}

        transition={{
          duration: 1.2,
          delay: 0.2,
          ease: [0.16, 1, 0.3, 1]
        }}

        viewport={{ once: true }}
      >

        <motion.span
          className="about-small"

          initial={{
            opacity: 0,
            letterSpacing: "20px"
          }}

          whileInView={{
            opacity: 1,
            letterSpacing: "8px"
          }}

          transition={{
            duration: 1
          }}

          viewport={{ once: true }}
        >
          MEET THE ARTIST
        </motion.span>

        <motion.h2
          className="about-title"

          initial={{
            opacity: 0,
            y: 40
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 1,
            delay: 0.3
          }}

          viewport={{ once: true }}
        >
          Telling Your <span>Legacy</span>
        </motion.h2>

        <motion.p
          className="about-sub"

          initial={{
            opacity: 0,
            y: 30
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 1,
            delay: 0.5
          }}

          viewport={{ once: true }}
        >
          Fine art photography for the modern, soulful couple.
        </motion.p>

        <motion.p
          className="about-text"

          initial={{
            opacity: 0,
            y: 30
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 1,
            delay: 0.7
          }}

          viewport={{ once: true }}
        >
          We believe that photography is more than just taking pictures; it is about
          preserving the raw emotions, the quiet glances, and the grand celebrations
          that define your life’s greatest milestones. With a keen eye for detail
          and a passion for storytelling, we transform your fleeting moments into
          timeless heirlooms that you will cherish for generations.
        </motion.p>

        <motion.button
          className="about-btn"

          initial={{
            opacity: 0,
            y: 20
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 1,
            delay: 0.9
          }}

          viewport={{ once: true }}

          whileHover={{
            y: -4
          }}
        >
          VIEW PORTFOLIO
        </motion.button>

      </motion.div>

    </section>
  );
}