import { motion } from "framer-motion";
import { CalendarHeart, Gem, Landmark, MapPinned } from "lucide-react";

const ceremonyAddress = "Rua Francisco Chaves Campos, 17 - Pampulha";
const ceremonyMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ceremonyAddress)}`;

const EventSection = () => {
  return (
    <section id="evento" className="wedding-section cinema-band">
      <div className="wedding-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="wedding-title">O Grande Dia</h2>
          <div className="wedding-divider" />
          <p className="wedding-subtitle">Cerimônia e dress code para viver esse momento com carinho</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="wedding-card text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Landmark className="w-8 h-8 text-gold mx-auto mb-4" />
            <h3 className="font-serif text-2xl font-light text-foreground mb-4">Cerimônia</h3>
            <div className="space-y-3 text-sm font-sans text-muted-foreground">
              <p className="flex items-center justify-center gap-2">
                <CalendarHeart className="w-4 h-4 text-gold" />
                25 de Julho de 2026 - 16h00
              </p>
              <p className="flex items-center justify-center gap-2">
                <MapPinned className="w-4 h-4 text-gold" />
                {ceremonyAddress}
              </p>
            </div>
            <a
              href={ceremonyMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 wedding-btn-outline text-xs"
            >
              Abrir no Google Maps
            </a>
          </motion.div>

          <motion.div
            className="wedding-card text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Gem className="w-8 h-8 text-gold mx-auto mb-4" />
            <h3 className="font-serif text-2xl font-light text-foreground mb-4">Dress Code</h3>
            <p className="text-sm font-sans text-muted-foreground leading-relaxed">
              Traje social em tons claros, suaves e elegantes. Sugerimos rosé, lavanda, verde sálvia, nude, champagne, areia, pêssego suave e neutros delicados, criando uma paleta harmoniosa e sofisticada para o nosso casamento.
            </p>
            <p className="mt-4 text-sm font-sans text-muted-foreground leading-relaxed">
              Evite branco, off-white e cores muito próximas ao vestido da noiva, além de tons muito vibrantes ou neon.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
