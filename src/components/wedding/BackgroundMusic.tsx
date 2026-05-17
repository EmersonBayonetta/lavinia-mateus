import { useEffect, useRef, useState } from "react";
import { Music2, Volume2, VolumeX } from "lucide-react";
import musicSrc from "@/music/WhatsApp Audio 2026-05-17 at 11.22.38.mpeg?url";

const BackgroundMusic = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.35;

    const handlePlay = () => setPlaying(true);
    const handlePause = () => setPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    audio
      .play()
      .catch(() => setPlaying(false));

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    await audio.play();
    setPlaying(true);
  };

  return (
    <>
      <audio ref={audioRef} src={musicSrc} autoPlay loop preload="auto" />
      <button
        type="button"
        className="music-control"
        onClick={toggleMusic}
        aria-pressed={playing}
        aria-label={playing ? "Pausar musica de fundo" : "Tocar musica de fundo"}
      >
        <span className="music-control-icon" aria-hidden="true">
          {playing ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
        </span>
        <span className="music-control-text">
          <Music2 className="h-3.5 w-3.5" aria-hidden="true" />
          Musica
        </span>
      </button>
    </>
  );
};

export default BackgroundMusic;
