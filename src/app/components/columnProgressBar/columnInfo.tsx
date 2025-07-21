import './columnInfo.css';
import { ColumnInfoProps } from '../../interfaces/interfaces';

const ColumnInfo = (props: ColumnInfoProps) => {
  return (
    <div className='column-info-container'>
      <div className='column-info-heading'>
        <h2>{props.heading}</h2>
      </div>
      <div className='column-info-wrapper'>
      <div className='column-info'>
        {props.items.map((item, index) => {
          return (
            <div className='timeline-item' key={index}>
              <div className='rounded'></div>
              <div className='triangle'></div>
              <div className='timeline-item-content'>
                <div className="timeline-item-content-header">
                  <span className='title'>{item.title}</span>
                  <span className='period'>{item.period}</span>
                </div>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className='separtor'>
      </div>
      </div>
    </div>
  );
}

export default ColumnInfo;

