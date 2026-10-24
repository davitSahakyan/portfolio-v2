import { wedding } from '../../wedding.config';
import Reveal from '../reveal/reveal';
import './calendar.css';

const WEEKDAYS = ['Երկ', 'Երք', 'Չրք', 'Հնգ', 'Ուրբ', 'Շբթ', 'Կիր'];

function Calendar() {
  const { year, month, day, monthName } = wedding.date;
  const daysInMonth = new Date(Date.UTC(year, month, 0)).getUTCDate();
  // Monday-first offset of the 1st day of the month
  const offset = (new Date(Date.UTC(year, month - 1, 1)).getUTCDay() + 6) % 7;
  const cells = [
    ...Array.from({ length: offset }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <section className="wd-section wd-calendar">
      <Reveal>
        <p className="wd-kicker">Մեր մեծ օրը</p>
        <h2 className="wd-section-title wd-calendar__month">{monthName}</h2>
        <p className="wd-calendar__year">{year}</p>

        <div className="wd-calendar__card">
          <div className="wd-calendar__grid wd-calendar__weekdays">
            {WEEKDAYS.map((weekday) => (
              <span key={weekday}>{weekday}</span>
            ))}
          </div>
          <div className="wd-calendar__grid">
            {cells.map((value, index) =>
              value === day ? (
                <span key={index} className="wd-calendar__day wd-calendar__day--active">
                  <svg viewBox="0 0 32 29" aria-hidden="true">
                    <path d="M16 28.5S1 19.6 1 9.3C1 4.7 4.6 1 9 1c3 0 5.6 1.7 7 4.2C17.4 2.7 20 1 23 1c4.4 0 8 3.7 8 8.3 0 10.3-15 19.2-15 19.2z" />
                  </svg>
                  <span>{value}</span>
                </span>
              ) : (
                <span key={index} className="wd-calendar__day">
                  {value}
                </span>
              )
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Calendar;
