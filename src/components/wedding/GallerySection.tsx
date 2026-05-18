import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const images = [
  { src: "/gallery/view-1.jpg", thumb: "/gallery/thumb-1.jpg", alt: "Foto do casamento 1" },
  { src: "/gallery/view-2.jpg", thumb: "/gallery/thumb-2.jpg", alt: "Foto do casamento 2" },
  { src: "/gallery/view-3.jpg", thumb: "/gallery/thumb-3.jpg", alt: "Foto do casamento 3" },
  { src: "/gallery/view-4.jpg", thumb: "/gallery/thumb-4.jpg", alt: "Foto do casamento 4" },
  { src: "/gallery/view-5.jpg", thumb: "/gallery/thumb-5.jpg", alt: "Foto do casamento 5" },
  { src: "/gallery/view-6.jpg", thumb: "/gallery/thumb-6.jpg", alt: "Foto do casamento 6" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="galeria" className="wedding-section bg-cream/50">
      <div className="wedding-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="wedding-title">Nossa Galeria</h2>
          <div className="wedding-divider" />
          <p className="wedding-subtitle">Momentos que guardamos com carinho</p>
        </motion.div>

        <div className="gallery-grid">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              className="gallery-frame"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => setSelected(img.src)}
            >
              <img
                src={img.thumb}
                alt={img.alt}
                className="gallery-image"
                decoding="async"
                loading="lazy"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="gallery-wash" />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.img
              src={selected}
              alt="Foto ampliada"
              className="max-w-full max-h-[90vh] rounded-lg object-contain"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <button
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-background/20 flex items-center justify-center backdrop-blur-sm"
              onClick={() => setSelected(null)}
              aria-label="Fechar foto"
            >
              <X className="w-5 h-5 text-background" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
