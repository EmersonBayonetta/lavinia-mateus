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
    <section id="historia" className="wedding-section bg-cream/50">
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

        <div className="relative">
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
            style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--rose-deep)), transparent)" }}
          />

          {milestones.map((m, i) => {
            const Icon = m.icon;
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={m.title}
                className={`flex items-center mb-12 md:mb-16 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-col`}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
              >
                <div className={`md:w-5/12 ${isLeft ? "md:text-right md:pr-12" : "md:text-left md:pl-12"} text-center`}>
                  <span className="text-xs uppercase text-gold font-sans">{m.date}</span>
                  <h3 className="font-serif text-2xl md:text-3xl font-light mt-2 text-foreground">{m.title}</h3>
                  <p className={`mt-3 text-muted-foreground font-sans text-sm leading-relaxed max-w-sm mx-auto ${isLeft ? "md:ml-auto md:mr-0" : "md:ml-0 md:mr-auto"}`}>
                    {m.desc}
                  </p>
                </div>

                <div className="md:w-2/12 flex justify-center my-6 md:my-0">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-rose-deep/30 bg-background">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                </div>

                <div className="md:w-5/12" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
