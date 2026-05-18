import { motion } from "framer-motion";
import { Clapperboard, Gem, HandHeart, Images, Landmark } from "lucide-react";

const milestones = [
  {
    icon: Clapperboard,
    title: "O encontro",
    desc: "Entre conversas leves, olhares atentos e aquele jeito bonito de reconhecer paz em alguém, a história de Lavinia e Mateus começou a ganhar forma.",
    date: "Primeira cena",
  },
  {
    icon: HandHeart,
    title: "O começo do amor",
    desc: "O que nasceu simples se tornou cuidado diário. Eles descobriram que amar também é escolher caminhar junto nas pequenas decisões.",
    date: "O roteiro muda",
  },
  {
    icon: Images,
    title: "Construindo memórias",
    desc: "Vieram viagens, planos, risadas, desafios e conquistas. Cada capítulo aproximou ainda mais os dois do sonho de formar uma família.",
    date: "Cenas favoritas",
  },
  {
    icon: Gem,
    title: "O sim",
    desc: "O pedido marcou a promessa de uma vida compartilhada: amor, fé, parceria e a certeza de que o melhor ainda está por vir.",
    date: "Clímax",
  },
  {
    icon: Landmark,
    title: "Até o altar",
    desc: "Agora, Lavinia e Mateus se preparam para celebrar esse amor ao lado das pessoas que fazem parte dessa jornada.",
    date: "O grande dia",
  },
];

const StorySection = () => {
  return (
    <section id="historia" className="wedding-section story-section">
      <div className="wedding-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="wedding-title">Nossa História</h2>
          <div className="wedding-divider" />
          <p className="wedding-subtitle">Um amor contado em cenas, memórias e promessas</p>
        </motion.div>

        <div className="story-timeline">
          <div
            className="story-line"
            style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--rose-deep)), transparent)" }}
          />

          {milestones.map((m, i) => {
            const Icon = m.icon;
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={m.title}
                className={`story-milestone ${isLeft ? "story-milestone-left" : "story-milestone-right"}`}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
              >
                <div className="story-copy">
                  <span className="text-xs uppercase text-gold font-sans">{m.date}</span>
                  <h3 className="font-serif text-2xl md:text-3xl font-light mt-2 text-foreground">{m.title}</h3>
                  <p className="story-text">
                    {m.desc}
                  </p>
                </div>

                <div className="story-icon-wrap">
                  <div className="story-icon">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                </div>

                <div className="story-breath" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
