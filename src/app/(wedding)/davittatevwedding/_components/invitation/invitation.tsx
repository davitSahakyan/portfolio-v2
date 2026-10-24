import { greetingWord } from '../../guest';
import { wedding } from '../../wedding.config';
import Calendar from '../calendar/calendar';
import Closing from '../closing/closing';
import Countdown from '../countdown/countdown';
import Envelope from '../envelope/envelope';
import Greeting from '../greeting/greeting';
import Hero from '../hero/hero';
import Schedule from '../schedule/schedule';

type InvitationProps = {
  guestName?: string;
  warm?: boolean;
};

function Invitation({ guestName, warm = false }: InvitationProps) {
  const greeting = guestName ? greetingWord(warm) : null;

  return (
    <>
      <Envelope
        greeting={greeting}
        recipient={guestName}
        initials={wedding.initials}
        date={wedding.date.short}
        musicSrc={wedding.musicSrc}
      />
      <main className="wd-page">
        <Hero />
        <Greeting greeting={greeting} recipient={guestName} />
        <Calendar />
        <Schedule />
        <Countdown target={wedding.countdownTarget} />
        <Closing />
      </main>
    </>
  );
}

export default Invitation;
