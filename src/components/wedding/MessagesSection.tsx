import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircleHeart, SendHorizontal } from "lucide-react";
import {
  createWeddingMessage,
  hasSharedMessageStore,
  listWeddingMessages,
  type WeddingMessage,
} from "@/lib/weddingMessages";

const MessagesSection = () => {
  const [messages, setMessages] = useState<WeddingMessage[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    const loadMessages = async () => {
      try {
        const stored = await listWeddingMessages();
        if (active) setMessages(stored);
      } catch {
        if (active) setError("Nao foi possivel carregar as mensagens agora.");
      } finally {
        if (active) setLoading(false);
      }
    };

    void loadMessages();

    return () => {
      active = false;
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setError("");
    setSending(true);

    try {
      const newMsg = await createWeddingMessage({
        name: name.trim(),
        message: message.trim(),
      });
      setMessages((current) => [newMsg, ...current]);
      setName("");
      setMessage("");
    } catch {
      setError("Nao foi possivel enviar a mensagem. Tente novamente em instantes.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="mensagens" className="wedding-section messages-section">
      <div className="wedding-container messages-container">
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

        <motion.form
          onSubmit={handleSubmit}
          className="wedding-card message-form"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-sans uppercase text-muted-foreground mb-2">
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
              <label className="block text-xs font-sans uppercase text-muted-foreground mb-2">
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
              <button type="submit" className="wedding-btn inline-flex items-center gap-2" disabled={sending}>
                <SendHorizontal className="w-4 h-4" /> {sending ? "Enviando..." : "Enviar Mensagem"}
              </button>
            </div>
            {error && (
              <p className="text-center text-xs font-sans text-muted-foreground">
                {error}
              </p>
            )}
            {!hasSharedMessageStore && (
              <p className="text-center text-[0.68rem] font-sans text-muted-foreground/70">
                Ambiente local: as mensagens ficam salvas apenas neste navegador.
              </p>
            )}
          </div>
        </motion.form>

        {loading && (
          <p className="text-center text-sm font-sans text-muted-foreground">
            Carregando mensagens...
          </p>
        )}

        {!loading && messages.length > 0 && (
          <div className="message-grid">
            {messages.map((msg, i) => (
              <motion.div
                key={msg.id}
                className="wedding-card message-note"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <MessageCircleHeart className="w-5 h-5 text-gold/30 absolute top-4 right-4" />
                <p className="text-sm font-sans text-foreground leading-relaxed mb-3 italic">"{msg.message}"</p>
                <p className="text-xs font-sans text-gold">- {msg.name}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MessagesSection;
