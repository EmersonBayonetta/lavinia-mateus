import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import img1 from "@/assets/Imagem1.jpg";
import img2 from "@/assets/Imagem2.jpg";
import img3 from "@/assets/Imagem3.jpg";
import img4 from "@/assets/Imagem4.jpg";
import img5 from "@/assets/Imagem5.jpg";
import img6 from "@/assets/Imagem6.jpg";

const images = [
  { src: img1, alt: "Foto do casamento 1" },
  { src: img2, alt: "Foto do casamento 2" },
  { src: img3, alt: "Foto do casamento 3" },
  { src: img4, alt: "Foto do casamento 4" },
  { src: img5, alt: "Foto do casamento 5" },
  { src: img6, alt: "Foto do casamento 6" },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 auto-rows-[180px] sm:auto-rows-[240px] lg:auto-rows-[300px]">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => setSelected(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
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
