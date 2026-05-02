import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";
import heroImg from "@/assets/Fundo.jpeg";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="hero-section"
    >
      <div className="hero-media" aria-hidden="true">
        <img
          src={heroImg}
          alt=""
          className="hero-image"
          loading="eager"
          decoding="async"
        />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <motion.p
          className="hero-kicker"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          Celebração de casamento
        </motion.p>

        <motion.h1
          id="hero-title"
          className="hero-title"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.16, ease: "easeOut" }}
        >
          <span>Lavinia</span>
          <span className="hero-ampersand">&</span>
          <span>Mateus</span>
        </motion.h1>

        <motion.p
          className="hero-copy"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.32, ease: "easeOut" }}
        >
          Duas histórias, um novo capítulo e a promessa de uma vida inteira juntos.
        </motion.p>

        <motion.div
          className="hero-countdown-wrap"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.48, ease: "easeOut" }}
        >
          <CountdownTimer />
        </motion.div>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.64, ease: "easeOut" }}
        >
          <a href="#evento" className="hero-button hero-button-primary">
            O Grande Dia
          </a>
          <a href="#presentes" className="hero-button hero-button-secondary">
            Presentes
          </a>
          <a href="#dinamica" className="hero-button hero-button-secondary">
            Dinâmica
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
