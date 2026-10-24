'use client';

import { useEffect, useState } from 'react';
import Reveal from '../reveal/reveal';
import './countdown.css';

const UNITS = [
  { label: 'օր', ms: 86_400_000 },
  { label: 'ժամ', ms: 3_600_000 },
  { label: 'րոպե', ms: 60_000 },
  { label: 'վայրկյան', ms: 1_000 },
];

const WEDDING_DAY_LENGTH = 12 * 3_600_000;

function splitDuration(diff: number) {
  let rest = diff;
  return UNITS.map(({ label, ms }) => {
    const value = Math.floor(rest / ms);
    rest -= value * ms;
    return { label, value };
  });
}

function Countdown({ target }: { target: string }) {
  // null until mounted, so server and client render the same markup
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  const diff = now === null ? null : Date.parse(target) - now;

  if (diff !== null && diff <= 0) {
    return (
      <section className="wd-section wd-countdown">
        <Reveal>
          <h2 className="wd-countdown__title">
            {-diff < WEDDING_DAY_LENGTH ? 'Այսօր մեր մեծ օրն է' : 'Շնորհակալ ենք, որ այս օրը մեզ հետ էիք'}
          </h2>
        </Reveal>
      </section>
    );
  }

  const parts = diff === null ? UNITS.map(({ label }) => ({ label, value: null })) : splitDuration(diff);

  return (
    <section className="wd-section wd-countdown">
      <Reveal>
        <h2 className="wd-countdown__title">Հարսանիքին մնաց</h2>
        <div className="wd-countdown__grid" role="timer">
          {parts.map(({ label, value }) => (
            <div key={label} className="wd-countdown__tile">
              <span className="wd-countdown__value">
                {value === null ? '–' : String(value).padStart(2, '0')}
              </span>
              <span className="wd-countdown__label">{label}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default Countdown;
