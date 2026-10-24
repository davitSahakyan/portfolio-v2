import { wedding } from '../../wedding.config';
import Ornament from '../ornament/ornament';
import Reveal from '../reveal/reveal';
import './closing.css';

function Closing() {
  const [first, second] = wedding.names;

  return (
    <footer className="wd-section wd-section--paper wd-closing">
      <Reveal>
        <p className="wd-closing__text">{wedding.closingText}</p>
        <div className="wd-closing__ornament">
          <Ornament />
        </div>
        <p className="wd-closing__with-love">Սիրով՝</p>
        <p className="wd-closing__names">
          {first} <span>&amp;</span> {second}
        </p>
        <p className="wd-closing__date">{wedding.date.short}</p>
      </Reveal>
    </footer>
  );
}

export default Closing;
