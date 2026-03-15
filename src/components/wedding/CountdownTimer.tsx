import { useState, useEffect } from "react";

const WEDDING_DATE = new Date("2026-10-12T16:00:00");

interface TimeLeft {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ dias: 0, horas: 0, minutos: 0, segundos: 0 });

  useEffect(() => {
    const calc = () => {
      const now = new Date();
      const diff = WEDDING_DATE.getTime() - now.getTime();
      if (diff <= 0) return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
      return {
        dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
        horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((diff / (1000 * 60)) % 60),
        segundos: Math.floor((diff / 1000) % 60),
      };
    };
    setTimeLeft(calc());
    const interval = setInterval(() => setTimeLeft(calc()), 1000);
    return () => clearInterval(interval);
  }, []);

  const units = Object.entries(timeLeft) as [string, number][];

  return (
    <div className="flex gap-4 md:gap-8 justify-center">
      {units.map(([label, value]) => (
        <div key={label} className="text-center">
          <div className="font-serif text-3xl md:text-5xl font-light gold-gradient-text">
            {String(value).padStart(2, "0")}
          </div>
          <div className="text-xs md:text-sm font-sans tracking-widest uppercase mt-1 text-muted-foreground">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
