'use client';

import { useEffect, useRef, useState } from 'react';
import './envelope.css';

type EnvelopeProps = {
  greeting: string | null;
  recipient?: string;
  initials: string;
  date: string;
  musicSrc: string;
};

type Stage = 'closed' | 'opening' | 'opened';

const OPENING_DURATION = 2300;
const REDUCED_OPENING_DURATION = 400;

function Envelope({ greeting, recipient, initials, date, musicSrc }: EnvelopeProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [stage, setStage] = useState<Stage>('closed');
  const [hasMusic, setHasMusic] = useState(false);
  const [playing, setPlaying] = useState(false);

  // Keep the page behind the envelope from scrolling until it is opened
  useEffect(() => {
    const root = document.documentElement;
    if (stage === 'opened') {
      root.dataset.opened = 'true';
      return;
    }
    window.scrollTo(0, 0);
    root.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    return () => {
      root.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [stage]);

  const playMusic = () => {
    audioRef.current
      ?.play()
      .then(() => {
        setHasMusic(true);
        setPlaying(true);
      })
      .catch(() => setPlaying(false));
  };

  // Browsers only allow audio after a tap, so the envelope tap starts the music
  const open = () => {
    if (stage !== 'closed') return;
    playMusic();
    setStage('opening');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setTimeout(() => setStage('opened'), reduceMotion ? REDUCED_OPENING_DURATION : OPENING_DURATION);
  };

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      playMusic();
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={musicSrc}
        loop
        preload="auto"
        onCanPlay={() => setHasMusic(true)}
        onError={() => setHasMusic(false)}
      />

      {stage !== 'opened' && (
        <div className="wd-intro" data-stage={stage}>
          <div className="wd-intro__address">
            <p className="wd-intro__kicker">Հրավեր</p>
            {greeting && <p className="wd-intro__word">{greeting}</p>}
            {recipient && <p className="wd-intro__name">{recipient}</p>}
          </div>

          <div className="wd-envelope" onClick={open} aria-hidden="true">
            <span className="wd-envelope__back" />
            <span className="wd-envelope__card">
              <span className="wd-envelope__card-initials">{initials}</span>
              <span className="wd-envelope__card-date">{date}</span>
            </span>
            <span className="wd-envelope__pocket" />
            <span className="wd-envelope__flap" />
            <span className="wd-envelope__seal">{initials}</span>
          </div>

          <button type="button" className="wd-intro__open" onClick={open}>
            Բացել հրավերը
          </button>
          <p className={`wd-intro__hint ${hasMusic ? 'is-visible' : ''}`}>♪ Միացրեք ձայնը</p>
        </div>
      )}

      {stage === 'opened' && hasMusic && (
        <button
          type="button"
          className="wd-music"
          data-playing={playing}
          onClick={toggleMusic}
          aria-label={playing ? 'Անջատել երաժշտությունը' : 'Միացնել երաժշտությունը'}
        >
          <span className="wd-music__bars" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </span>
        </button>
      )}
    </>
  );
}

export default Envelope;
