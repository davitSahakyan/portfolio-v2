import Image from 'next/image';
import { wedding } from '../../wedding.config';
import './hero.css';

function Hero() {
  const [first, second] = wedding.names;

  return (
    <section className="wd-hero">
      <Image
        src={wedding.photo.src}
        alt={`${first} և ${second}`}
        fill
        priority
        sizes="(max-width: 520px) 100vw, 520px"
        className="wd-hero__photo"
      />
      <div className="wd-hero__shade" />

      <div className="wd-hero__content">
        <p className="wd-hero__kicker">{wedding.heroKicker}</p>
        <h1 className="wd-hero__names">
          <span>{first}</span>
          <span className="wd-hero__amp">&amp;</span>
          <span>{second}</span>
        </h1>
        <p className="wd-hero__date">{wedding.date.short}</p>
      </div>

      <a href="#invitation" className="wd-hero__scroll" aria-label="Ներքև">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </a>
    </section>
  );
}

export default Hero;
