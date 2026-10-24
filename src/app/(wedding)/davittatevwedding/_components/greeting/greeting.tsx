import { wedding } from '../../wedding.config';
import Ornament from '../ornament/ornament';
import Reveal from '../reveal/reveal';
import './greeting.css';

type GreetingProps = {
  greeting: string | null;
  recipient?: string;
};

function Greeting({ greeting, recipient }: GreetingProps) {
  return (
    <section id="invitation" className="wd-section wd-section--paper wd-greeting">
      <Reveal>
        <Ornament />
        {greeting && <p className="wd-greeting__word">{greeting}</p>}
        {recipient && <h2 className="wd-greeting__name">{recipient}</h2>}
        <p className="wd-greeting__text">{wedding.invitationText}</p>
        <p className="wd-greeting__note">{wedding.invitationNote}</p>
      </Reveal>
    </section>
  );
}

export default Greeting;
