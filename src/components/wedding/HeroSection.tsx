import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";
import heroImg from "@/assets/hero-wedding.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Casamento Lavinia e Mateus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to bottom, hsl(var(--background) / 0.3) 0%, hsl(var(--background) / 0.7) 50%, hsl(var(--background) / 0.95) 100%)"
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <p className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Convidamos você para celebrar
          </p>
        </motion.div>

        <motion.h1
          className="font-serif text-5xl md:text-8xl font-light leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}
        >
          <span className="block gold-gradient-text">Lavinia Bayonetta</span>
          <span className="block text-2xl md:text-4xl my-3 text-muted-foreground font-serif italic">&</span>
          <span className="block gold-gradient-text">Mateus Marcelino</span>
        </motion.h1>

        <motion.div
          className="wedding-divider mt-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />

        <motion.p
          className="wedding-subtitle mt-6 max-w-xl mx-auto text-balance"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          "Duas histórias escritas separadamente, agora unidas em um único capítulo para sempre."
        </motion.p>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <CountdownTimer />
        </motion.div>

        <motion.div
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <a href="#rsvp" className="wedding-btn">Confirmar Presença</a>
          <a href="#evento" className="wedding-btn-outline">Ver Detalhes</a>
          <a href="#presentes" className="wedding-btn-outline">Lista de Presentes</a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-gold to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
