import { motion } from "framer-motion";
import { Gift, Heart, Home, Sparkles, Ticket, Wallet } from "lucide-react";

const gifts = [
  {
    icon: Home,
    title: "Itens da Casa",
    desc: "Ajude Lavinia e Mateus a montarem o novo lar com carinho.",
    value: "A partir de R$ 150",
  },
  {
    icon: Heart,
    title: "Experiência do Casal",
    desc: "Contribua para momentos especiais, passeios e memórias a dois.",
    value: "A partir de R$ 200",
  },
  {
    icon: Wallet,
    title: "Contribuição Livre",
    desc: "Escolha o valor que fizer sentido para presentear os noivos.",
    value: "Valor livre",
  },
  {
    icon: Ticket,
    title: "Dinâmica do Casal",
    desc: "Participe da dinâmica online preparada para celebrar essa fase.",
    value: "Online",
  },
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
          <h2 className="wedding-title">Presentes do Casal</h2>
          <div className="wedding-divider" />
          <p className="wedding-subtitle">
            Uma lista delicada para quem deseja contribuir com a nova jornada dos noivos.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {gifts.map((gift, i) => {
            const Icon = gift.icon;
            return (
              <motion.div
                key={gift.title}
                className="wedding-card text-center group hover:shadow-lg transition-shadow duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="w-14 h-14 rounded-full bg-rose/35 flex items-center justify-center mx-auto mb-4 group-hover:bg-rose/55 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-light text-foreground mb-2">{gift.title}</h3>
                <p className="text-sm font-sans text-muted-foreground mb-4">{gift.desc}</p>
                <span className="text-xs font-sans uppercase text-gold">{gift.value}</span>
                <div className="mt-5">
                  <button className="wedding-btn text-xs px-6 py-2">Presentear</button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          id="dinamica"
          className="wedding-card text-center max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles className="w-7 h-7 text-gold mx-auto mb-4" />
          <h3 className="font-serif text-2xl font-light text-foreground mb-3">Contribua com a Dinâmica do Casal Online</h3>
          <p className="text-sm font-sans text-muted-foreground leading-relaxed mb-6">
            Um espaço para participar da experiência preparada para os noivos. A contribuição pode ser feita por PIX, mantendo a proposta simples, prática e carinhosa.
          </p>
          <a href="#pix" className="wedding-btn-outline inline-block text-xs">
            Contribuir por PIX
          </a>
        </motion.div>

        <motion.div
          id="pix"
          className="wedding-card text-center max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Gift className="w-7 h-7 text-gold mx-auto mb-4" />
          <h3 className="font-serif text-xl font-light text-foreground mb-4">Contribuição via PIX</h3>
          <div className="w-32 h-32 bg-muted rounded-lg mx-auto mb-4 flex items-center justify-center">
            <span className="text-xs text-muted-foreground font-sans">QR Code PIX</span>
          </div>
          <p className="text-sm font-sans text-muted-foreground mb-2">Chave PIX:</p>
          <p className="text-sm font-sans text-foreground font-medium break-words">casamento@laviniaaemateus.com</p>
        </motion.div>
      </div>
    </section>
  );
};

export default GiftSection;
