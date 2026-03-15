import { motion } from "framer-motion";
import { Gift, Heart, Plane, Home, UtensilsCrossed, Sparkles } from "lucide-react";

const gifts = [
  { icon: UtensilsCrossed, title: "Jantar Romântico", desc: "Um jantar especial na lua de mel", value: "R$ 250" },
  { icon: Sparkles, title: "Passeio Especial", desc: "Uma experiência inesquecível na viagem", value: "R$ 350" },
  { icon: Plane, title: "Contribuição para Viagem", desc: "Ajude a realizar a lua de mel dos sonhos", value: "R$ 500" },
  { icon: Home, title: "Itens da Nova Casa", desc: "Contribua para o nosso novo lar", value: "R$ 200" },
  { icon: Heart, title: "Experiências do Casal", desc: "Momentos especiais para nós dois", value: "R$ 150" },
  { icon: Gift, title: "Contribuição Livre", desc: "Qualquer valor que desejar", value: "Livre" },
];

const GiftSection = () => {
  return (
    <section id="presentes" className="wedding-section">
      <div className="wedding-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="wedding-title">Lista de Presentes</h2>
          <div className="wedding-divider" />
          <p className="wedding-subtitle">
            O maior presente é sua presença, mas se desejar contribuir com nossa nova jornada, ficaremos muito felizes.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {gifts.map((gift, i) => {
            const Icon = gift.icon;
            return (
              <motion.div
                key={i}
                className="wedding-card text-center group hover:shadow-lg transition-shadow duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-light text-foreground mb-2">{gift.title}</h3>
                <p className="text-sm font-sans text-muted-foreground mb-4">{gift.desc}</p>
                <span className="text-xs font-sans tracking-widest uppercase text-gold">{gift.value}</span>
                <div className="mt-5">
                  <button className="wedding-btn text-xs px-6 py-2">Presentear</button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* PIX Section */}
        <motion.div
          className="wedding-card text-center max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-serif text-xl font-light text-foreground mb-4">Contribuição via PIX</h3>
          <div className="w-32 h-32 bg-muted rounded-lg mx-auto mb-4 flex items-center justify-center">
            <span className="text-xs text-muted-foreground font-sans">QR Code PIX</span>
          </div>
          <p className="text-sm font-sans text-muted-foreground mb-2">Chave PIX:</p>
          <p className="text-sm font-sans text-foreground font-medium tracking-wide">casamento@laviniaaemateus.com</p>
        </motion.div>
      </div>
    </section>
  );
};

export default GiftSection;
