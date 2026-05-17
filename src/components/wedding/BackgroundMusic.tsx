import { useCallback, useEffect, useRef, useState } from "react";
import { Music2, Volume2, VolumeX } from "lucide-react";
import musicSrc from "@/music/WhatsApp Audio 2026-05-17 at 11.22.38.mpeg?url";

const BackgroundMusic = () => {
  const [playing, setPlaying] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const [mutedAutoplay, setMutedAutoplay] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playMusic = useCallback(async (allowMutedFallback = false) => {
    const audio = audioRef.current;

    if (!audio) return false;

    audio.muted = false;
    audio.volume = 0.35;

    try {
      await audio.play();
      setAutoplayBlocked(false);
      setMutedAutoplay(false);
      return true;
    } catch {
      if (allowMutedFallback) {
        try {
          audio.muted = true;
          await audio.play();
          setPlaying(true);
          setMutedAutoplay(true);
        } catch {
          setMutedAutoplay(false);
        }
      }

      setAutoplayBlocked(true);
      return false;
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.35;
    audio.load();

    const handlePlay = () => setPlaying(true);
    const handlePause = () => {
      setPlaying(false);
      setMutedAutoplay(false);
    };
    const handleVolumeChange = () => {
      setMutedAutoplay(!audio.paused && audio.muted);
    };

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("volumechange", handleVolumeChange);

    void playMusic(true);

    const unlockMusic = (event: Event) => {
      const target = event.target;

      if (target instanceof Element && target.closest(".music-control")) return;

      void playMusic();
    };

    const unlockOptions: AddEventListenerOptions = { once: true, passive: true };

    window.addEventListener("pointerdown", unlockMusic, unlockOptions);
    window.addEventListener("touchstart", unlockMusic, unlockOptions);
    window.addEventListener("scroll", unlockMusic, unlockOptions);
    window.addEventListener("keydown", unlockMusic, { once: true });

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("volumechange", handleVolumeChange);
      window.removeEventListener("pointerdown", unlockMusic, unlockOptions);
      window.removeEventListener("touchstart", unlockMusic, unlockOptions);
      window.removeEventListener("scroll", unlockMusic, unlockOptions);
      window.removeEventListener("keydown", unlockMusic);
    };
  }, [playMusic]);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (!audio.paused && (audio.muted || mutedAutoplay)) {
      audio.muted = false;
      audio.volume = 0.35;
      setMutedAutoplay(false);
      setAutoplayBlocked(false);
      await audio.play();
      return;
    }

    if (!audio.paused) {
      audio.pause();
      setPlaying(false);
      setMutedAutoplay(false);
      return;
    }

    await playMusic();
  };

  const needsAction = (autoplayBlocked && !playing) || mutedAutoplay;
  const iconPlaying = playing && !mutedAutoplay;
  const buttonLabel = needsAction ? "Aperte o play e entre no clima" : "Musica";

  return (
    <>
      <audio ref={audioRef} src={musicSrc} autoPlay loop preload="auto" playsInline />
      <button
        type="button"
        className={`music-control ${needsAction ? "music-control-attention" : ""}`}
        onClick={toggleMusic}
        aria-pressed={playing}
        aria-label={playing ? "Pausar musica de fundo" : "Tocar musica de fundo"}
      >
        <span className="music-control-icon" aria-hidden="true">
          {iconPlaying ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
        </span>
        <span className="music-control-copy">
          <Music2 className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="music-control-text">{buttonLabel}</span>
        </span>
      </button>
    </>
  );
};

export default BackgroundMusic;
