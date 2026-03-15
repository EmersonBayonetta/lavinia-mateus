import { motion } from "framer-motion";
import { Heart, Star, Sparkles, Church, Coffee } from "lucide-react";

const milestones = [
  {
    icon: Coffee,
    title: "O Primeiro Encontro",
    desc: "Dois caminhos se cruzaram de uma maneira que só o destino poderia planejar. Um café, um sorriso e o início de tudo.",
    date: "O começo",
  },
  {
    icon: Heart,
    title: "O Início da História",
    desc: "O que começou com borboletas no estômago se transformou em um amor que cresce a cada dia.",
    date: "Apaixonados",
  },
  {
    icon: Star,
    title: "Momentos Especiais",
    desc: "Viagens, risadas, desafios superados juntos — cada momento fortaleceu nosso amor.",
    date: "Construindo juntos",
  },
  {
    icon: Sparkles,
    title: "O Pedido de Casamento",
    desc: "Um momento mágico, cheio de emoção, onde um 'sim' selou a promessa de uma vida inteira juntos.",
    date: "O sim eterno",
  },
  {
    icon: Church,
    title: "O Caminho até o Altar",
    desc: "E agora, estamos prestes a dar o passo mais bonito das nossas vidas — juntos, para sempre.",
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
          <p className="wedding-subtitle">Cada capítulo nos trouxe até aqui</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
            style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--gold-light)), transparent)" }}
          />

          {milestones.map((m, i) => {
            const Icon = m.icon;
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                className={`flex items-center mb-12 md:mb-16 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-col`}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
              >
                <div className={`md:w-5/12 ${isLeft ? "md:text-right md:pr-12" : "md:text-left md:pl-12"} text-center`}>
                  <span className="text-xs tracking-[0.2em] uppercase text-gold font-sans">{m.date}</span>
                  <h3 className="font-serif text-2xl md:text-3xl font-light mt-2 text-foreground">{m.title}</h3>
                  <p className="mt-3 text-muted-foreground font-sans text-sm leading-relaxed max-w-sm mx-auto md:mx-0 {isLeft ? 'md:ml-auto' : ''}">{m.desc}</p>
                </div>

                <div className="md:w-2/12 flex justify-center my-6 md:my-0">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-gold/30 bg-background">
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
