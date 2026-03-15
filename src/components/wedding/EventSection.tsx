import { motion } from "framer-motion";
import { MapPin, Clock, Church, PartyPopper, Shirt, Hotel } from "lucide-react";

const EventSection = () => {
  return (
    <section id="evento" className="wedding-section bg-cream/50">
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
          <p className="wedding-subtitle">Todos os detalhes para celebrar conosco</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Cerimônia */}
          <motion.div
            className="wedding-card text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Church className="w-8 h-8 text-gold mx-auto mb-4" />
            <h3 className="font-serif text-2xl font-light text-foreground mb-4">Cerimônia</h3>
            <div className="space-y-3 text-sm font-sans text-muted-foreground">
              <p className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 text-gold" />
                12 de Outubro de 2026 — 16h00
              </p>
              <p className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4 text-gold" />
                Igreja Matriz — Centro
              </p>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 wedding-btn-outline text-xs"
            >
              Abrir no Google Maps
            </a>
          </motion.div>

          {/* Recepção */}
          <motion.div
            className="wedding-card text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <PartyPopper className="w-8 h-8 text-gold mx-auto mb-4" />
            <h3 className="font-serif text-2xl font-light text-foreground mb-4">Recepção</h3>
            <div className="space-y-3 text-sm font-sans text-muted-foreground">
              <p className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 text-gold" />
                18h00 em diante
              </p>
              <p className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4 text-gold" />
                Espaço Jardim das Flores
              </p>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 wedding-btn-outline text-xs"
            >
              Abrir no Google Maps
            </a>
          </motion.div>
        </div>

        {/* Dress Code & Hospedagem */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="wedding-card text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Shirt className="w-7 h-7 text-gold mx-auto mb-3" />
            <h3 className="font-serif text-xl font-light text-foreground mb-3">Dress Code</h3>
            <p className="text-sm font-sans text-muted-foreground leading-relaxed">
              Traje social. Sugerimos tons claros e neutros — evitar branco para as convidadas.
            </p>
          </motion.div>

          <motion.div
            className="wedding-card text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Hotel className="w-7 h-7 text-gold mx-auto mb-3" />
            <h3 className="font-serif text-xl font-light text-foreground mb-3">Hospedagem</h3>
            <p className="text-sm font-sans text-muted-foreground leading-relaxed">
              Sugerimos o Hotel Jardim Imperial ou a Pousada Villa Serena, ambos próximos ao local do evento.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
