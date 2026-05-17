import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, HandCoins, HousePlus, QrCode, TicketCheck } from "lucide-react";

const giftListUrl = "https://listas.casasbahia.com.br/LAVINIAEMATEUS";
const pixKey = "32999128353";
const pixCopiaeCola = "00020126360014br.gov.bcb.pix0114+55329991283535204000053039865802BR5925MATEUS MARCELINO RODRIGUE6009Sao Paulo62290525REC6A09D0EBBF1FD7570320176304B77D";

const gifts = [
  {
    icon: HousePlus,
    title: "Itens da Casa",
    desc: "Ajude Lavinia e Mateus a montarem o novo lar com carinho.",
    value: "",
    action: "list",
  },
  {
    icon: HandCoins,
    title: "Contribuição Livre",
    desc: "Escolha o valor que fizer sentido para presentear os noivos.",
    value: "",
    action: "pix",
  },
  {
    icon: TicketCheck,
    title: "Dinâmica do Casal",
    desc: "Participe da dinâmica preparada para celebrar essa fase.",
    value: "",
    action: "list",
  },
];

const GiftSection = () => {
  const [pixCopied, setPixCopied] = useState(false);

  const handlePixClick = async () => {
    try {
      await navigator.clipboard.writeText(pixCopiaeCola);
      setPixCopied(true);
      window.setTimeout(() => setPixCopied(false), 2200);
    } catch {
      setPixCopied(false);
    }

    document.getElementById("pix")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                {gift.action === "pix" ? (
                  <button
                    type="button"
                    className="wedding-btn mt-5 gap-2 text-xs px-6 py-2"
                    onClick={handlePixClick}
                  >
                    {pixCopied ? "Pix copiado" : "Contribuir via PIX"}
                    <QrCode className="h-3.5 w-3.5" />
                  </button>
                ) : (
                  <a
                    href={giftListUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wedding-btn mt-5 gap-2 text-xs px-6 py-2"
                  >
                    Presentear
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          id="pix"
          className="wedding-card text-center max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <QrCode className="w-7 h-7 text-gold mx-auto mb-4" />
          <h3 className="font-serif text-xl font-light text-foreground mb-4">Contribuição via PIX</h3>
          <div className="w-40 h-40 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center p-3 shadow-sm">
            <img
              src="/pix-copia-e-cola-qrcode.svg"
              alt="QR Code para pagamento via PIX"
              className="h-full w-full"
              loading="lazy"
            />
          </div>
          <p className="text-sm font-sans text-muted-foreground mb-2">Chave PIX:</p>
          <p className="text-sm font-sans text-foreground font-medium break-words">{pixKey}</p>
          <p className="text-sm font-sans text-muted-foreground mt-4 mb-2">Pix copia e cola:</p>
          <p className="text-xs font-sans text-foreground font-medium break-words">{pixCopiaeCola}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default GiftSection;
