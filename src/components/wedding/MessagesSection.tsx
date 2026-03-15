import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Quote } from "lucide-react";

interface Message {
  name: string;
  message: string;
  createdAt: string;
}

const MessagesSection = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("wedding-messages") || "[]");
    setMessages(stored);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    const newMsg: Message = { name: name.trim(), message: message.trim(), createdAt: new Date().toISOString() };
    const updated = [newMsg, ...messages];
    setMessages(updated);
    localStorage.setItem("wedding-messages", JSON.stringify(updated));
    setName("");
    setMessage("");
  };

  return (
    <section id="mensagens" className="wedding-section">
      <div className="wedding-container max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="wedding-title">Mensagens para os Noivos</h2>
          <div className="wedding-divider" />
          <p className="wedding-subtitle">Deixe suas palavras de carinho</p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="wedding-card mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-sans tracking-widest uppercase text-muted-foreground mb-2">
                Seu nome
              </label>
              <input
                required
                className="wedding-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Como deseja ser identificado"
              />
            </div>
            <div>
              <label className="block text-xs font-sans tracking-widest uppercase text-muted-foreground mb-2">
                Sua mensagem
              </label>
              <textarea
                required
                rows={4}
                className="wedding-input resize-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escreva sua mensagem de carinho..."
              />
            </div>
            <div className="text-center">
              <button type="submit" className="wedding-btn inline-flex items-center gap-2">
                <Send className="w-4 h-4" /> Enviar Mensagem
              </button>
            </div>
          </div>
        </motion.form>

        {/* Messages Grid */}
        {messages.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-4">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                className="wedding-card relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Quote className="w-5 h-5 text-gold/30 absolute top-4 right-4" />
                <p className="text-sm font-sans text-foreground leading-relaxed mb-3 italic">"{msg.message}"</p>
                <p className="text-xs font-sans text-gold tracking-wide">— {msg.name}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MessagesSection;
