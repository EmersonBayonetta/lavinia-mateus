import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";

const RSVPSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    guests: "1",
    phone: "",
    dietary: "",
    attending: true,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store locally for now (Lovable Cloud can be added later)
    const existing = JSON.parse(localStorage.getItem("wedding-rsvps") || "[]");
    existing.push({ ...formData, submittedAt: new Date().toISOString() });
    localStorage.setItem("wedding-rsvps", JSON.stringify(existing));
    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="wedding-section">
      <div className="wedding-container max-w-2xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="wedding-title">Confirme sua Presença</h2>
          <div className="wedding-divider" />
          <p className="wedding-subtitle">Ficaremos muito felizes com você neste dia</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              className="text-center wedding-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 rounded-full bg-olive/10 flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-olive" />
              </div>
              <h3 className="font-serif text-2xl font-light text-foreground mb-3">Obrigado!</h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                Sua presença tornará este dia ainda mais especial para nós.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="wedding-card space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Attending toggle */}
              <div className="flex gap-4 justify-center mb-8">
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, attending: true }))}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-sans tracking-wide transition-all duration-300 border ${
                    formData.attending
                      ? "bg-olive/10 border-olive text-olive"
                      : "border-border text-muted-foreground hover:border-olive/50"
                  }`}
                >
                  <Check className="w-4 h-4" /> Confirmo presença
                </button>
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, attending: false }))}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-sans tracking-wide transition-all duration-300 border ${
                    !formData.attending
                      ? "bg-rose/20 border-rose-deep text-rose-deep"
                      : "border-border text-muted-foreground hover:border-rose-deep/50"
                  }`}
                >
                  <X className="w-4 h-4" /> Não poderei comparecer
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-sans tracking-widest uppercase text-muted-foreground mb-2">
                    Nome completo
                  </label>
                  <input
                    required
                    className="wedding-input"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-xs font-sans tracking-widest uppercase text-muted-foreground mb-2">
                    Número de convidados
                  </label>
                  <select
                    className="wedding-input"
                    value={formData.guests}
                    onChange={(e) => setFormData(prev => ({ ...prev, guests: e.target.value }))}
                  >
                    {[1, 2, 3, 4, 5].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? "pessoa" : "pessoas"}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-sans tracking-widest uppercase text-muted-foreground mb-2">
                  Telefone / WhatsApp
                </label>
                <input
                  className="wedding-input"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label className="block text-xs font-sans tracking-widest uppercase text-muted-foreground mb-2">
                  Restrição alimentar (opcional)
                </label>
                <input
                  className="wedding-input"
                  value={formData.dietary}
                  onChange={(e) => setFormData(prev => ({ ...prev, dietary: e.target.value }))}
                  placeholder="Ex: vegetariano, intolerância a lactose..."
                />
              </div>

              <div className="text-center pt-4">
                <button type="submit" className="wedding-btn">
                  Enviar Confirmação
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RSVPSection;
