import "./counterFrames.css";
import { conterFramesData } from './data';

function CounterFrames() {
  return (
    <div className="counter-frames">
      {conterFramesData.map((item, index) => {
        return (
          <div className='counter-frame' key={index}>
            <span className='counter-frame-count'>{item.countString}</span>
            <span className='counter-frame-text'>{item.description}</span>
          </div>
        );
      })}
    </div>
  );
}

export default CounterFrames;
