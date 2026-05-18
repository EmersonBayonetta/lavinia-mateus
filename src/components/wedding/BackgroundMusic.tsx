import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
  type PointerEvent,
  type TouchEvent,
} from "react";
import { Music2, Volume2, VolumeX } from "lucide-react";

const musicSrc = "/wedding-music.mp3";

const BackgroundMusic = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const lastToggleRef = useRef(0);

  const playMusic = useCallback(async () => {
    const audio = audioRef.current;

    if (!audio) return false;

    if (!audio.currentSrc) audio.load();

    audio.muted = false;
    audio.volume = 0.35;
    audio.playsInline = true;

    try {
      await audio.play();
      return true;
    } catch {
      return false;
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.35;
    audio.muted = false;
    audio.playsInline = true;

    const handlePlay = () => setPlaying(true);
    const handlePause = () => setPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, [playMusic]);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      setPlaying(false);
      return;
    }

    await playMusic();
  };

  const runUserToggle = () => {
    const now = window.Date.now();

    if (now - lastToggleRef.current < 450) return;

    lastToggleRef.current = now;
    void toggleMusic();
  };

  const handlePointerDown = (event: PointerEvent<HTMLButtonElement>) => {
    event.preventDefault();
    runUserToggle();
  };

  const handleTouchEnd = (event: TouchEvent<HTMLButtonElement>) => {
    event.preventDefault();
    runUserToggle();
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    runUserToggle();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key !== "Enter" && event.key !== " ") return;

    event.preventDefault();
    void toggleMusic();
  };

  const needsAction = !playing;
  const iconPlaying = playing;
  const buttonLabel = needsAction ? "Aperte o play e entre no clima" : "Musica";

  return (
    <>
      <audio ref={audioRef} loop preload="none" playsInline>
        <source src={musicSrc} type="audio/mpeg" />
      </audio>
      <button
        type="button"
        className={`music-control ${needsAction ? "music-control-attention" : ""}`}
        onPointerDown={handlePointerDown}
        onTouchEnd={handleTouchEnd}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
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
