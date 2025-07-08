import './columnInfo.css';
import { ColumnInfoProps } from '../../interfaces/interfaces';

function ColumnInfo(props: ColumnInfoProps) {
  console.log(props, 'props');
  return (
    <div className='column-info-container'>
      <div className='column-info-heading'>
        <h2>{props.heading}</h2>
      </div>
      <div className='column-info'>
        {props.items.map((item, index) => {
          return (
            <div className='timeline-item' key={index}>
              <div className='timeline-item-content'>
                <div className="timeline-item-content-header">
                  <h5>{item.title}</h5>
                  <span className='tag' style={{ background: 'blue' }}>
                    {item.period}
                  </span>
                </div>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ColumnInfo;
