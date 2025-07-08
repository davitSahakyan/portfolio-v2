import CheckIcon from '@mui/icons-material/Check';
import './KnowlageList.css'

const data: string[] = [
    "Bootstrap, MaterialUI, AntDesign",
    "Sass, Less",
    "React, Angular, Webpack, Jquery",
    "GIT knowledge"
]

const KnowlageList = () => {
  return (
    <div className="knowlageList-container pt-15 pb-15">
        <ul>
            {data.map(item => {
               return  <li key={item}> <CheckIcon fontSize="small"/> {item}</li>
            })}
          
        </ul>
    </div>
  )
};

export default KnowlageList;
