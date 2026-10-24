import { wedding } from '../../wedding.config';
import Reveal from '../reveal/reveal';
import './schedule.css';

const ICONS = {
  church: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
      <path d="M16 2v6M13 5h6M16 8l-6 6v4h12v-4l-6-6zM6 30V20l4-2M26 30V20l-4-2M6 30h20M10 18v12M22 18v12" />
      <path d="M14 30v-5a2 2 0 014 0v5" />
    </svg>
  ),
  rings: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
      <circle cx="12" cy="19" r="8" />
      <circle cx="20" cy="19" r="8" />
      <path d="M10 6l2-3 2 3-2 2-2-2z" />
    </svg>
  ),
};

function Schedule() {
  return (
    <section className="wd-section wd-section--paper wd-schedule">
      <Reveal>
        <p className="wd-kicker">{wedding.date.long}</p>
        <h2 className="wd-section-title wd-schedule__title">Օրվա ծրագիրը</h2>
      </Reveal>

      <ol className="wd-schedule__list">
        {wedding.events.map((event) => (
          <li key={event.time} className="wd-schedule__item">
            <Reveal className="wd-schedule__card">
              <span className="wd-schedule__icon">{ICONS[event.icon]}</span>
              <p className="wd-schedule__time">{event.time}</p>
              <h3 className="wd-schedule__name">{event.title}</h3>
              <p className="wd-schedule__place">{event.place}</p>
              <p className="wd-schedule__location">{event.location}</p>
              <a
                className="wd-schedule__map"
                href={event.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 21s-7-6.2-7-11.5A7 7 0 0112 2.5a7 7 0 017 7C19 14.8 12 21 12 21z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.6" />
                </svg>
                Ինչպես հասնել
              </a>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Schedule;
