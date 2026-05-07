import { motion } from "framer-motion";
import { HeartHandshake, PartyPopper } from "lucide-react";

const FooterSection = () => {
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = "Você está convidado para o casamento de Lavinia e Mateus!";

  const handleShare = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <footer className="wedding-section bg-cream/50 text-center">
      <div className="wedding-container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <HeartHandshake className="w-6 h-6 text-gold mx-auto mb-6" />
          <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground mb-4">
            Estamos ansiosos para compartilhar esse momento inesquecível com você.
          </h2>
          <div className="wedding-divider" />

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="#presentes" className="wedding-btn">Lista de Presentes</a>
            <a href="#dinamica" className="wedding-btn-outline">Participe da Dinâmica do Casal</a>
            <button onClick={handleShare} className="wedding-btn-outline inline-flex items-center gap-2 justify-center">
              <PartyPopper className="w-4 h-4" /> Compartilhar
            </button>
          </div>

          <p className="mt-12 text-xs font-sans uppercase text-muted-foreground">
            Lavinia & Mateus - 2026
          </p>
          <p className="mt-3 text-[0.68rem] font-sans uppercase tracking-[0.18em] text-muted-foreground/70">
            Projeto desenvolvido por Emerson Bayonetta e Vitor Amorim
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
