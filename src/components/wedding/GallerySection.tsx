import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import img1 from "@/assets/Imagem1.jpg";
import img2 from "@/assets/Imagem2.jpg";
import img3 from "@/assets/Imagem3.jpg";
import img4 from "@/assets/Imagem4.jpg";
import img5 from "@/assets/Imagem5.jpg";
import img6 from "@/assets/Imagem6.jpg";
import img7 from "@/assets/MAXX1892.jpg";
import img8 from "@/assets/MAXX1998.jpg";
import img9 from "@/assets/MAXX2012.jpg";
import img10 from "@/assets/MAXX2028.jpg";
import img11 from "@/assets/MAXX2053.jpg";
import img12 from "@/assets/MAXX2087.jpg";
import img13 from "@/assets/MAXX2102.jpg";
import img14 from "@/assets/MAXX2365.jpg";
import img15 from "@/assets/MAXX2448.jpg";
import img16 from "@/assets/MAXX2500.jpg";
import img17 from "@/assets/MAXX2505.jpg";
import img18 from "@/assets/MAXX2520.jpg";
import img19 from "@/assets/MAXX2524.jpg";
import img20 from "@/assets/MAXX2540.jpg";

const images = [
  { src: img1, alt: "Foto do casamento 1" },
  { src: img2, alt: "Foto do casamento 2" },
  { src: img3, alt: "Foto do casamento 3" },
  { src: img4, alt: "Foto do casamento 4" },
  { src: img5, alt: "Foto do casamento 5" },
  { src: img6, alt: "Foto do casamento 6" },
  { src: img7, alt: "Foto do casamento 7" },
  { src: img8, alt: "Foto do casamento 8" },
  { src: img9, alt: "Foto do casamento 9" },
  { src: img10, alt: "Foto do casamento 10" },
  { src: img11, alt: "Foto do casamento 11" },
  { src: img12, alt: "Foto do casamento 12" },
  { src: img13, alt: "Foto do casamento 13" },
  { src: img14, alt: "Foto do casamento 14" },
  { src: img15, alt: "Foto do casamento 15" },
  { src: img16, alt: "Foto do casamento 16" },
  { src: img17, alt: "Foto do casamento 17" },
  { src: img18, alt: "Foto do casamento 18" },
  { src: img19, alt: "Foto do casamento 19" },
  { src: img20, alt: "Foto do casamento 20" },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4 auto-rows-[150px] sm:auto-rows-[200px] md:auto-rows-[250px] lg:auto-rows-[300px] xl:auto-rows-[250px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
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

      {/* Lightbox */}
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
