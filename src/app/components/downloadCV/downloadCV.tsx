import DownloadIcon from '@mui/icons-material/Download';
import './downloadCV.css';

const DownloadCv = () => {
  return (
    <div className="download pt-30">
        <a href="/blank.pdf" download="blank.pdf" className="download-link">
            <span>Download CV</span><DownloadIcon/>
        </a>
    </div>
  )
};

export default DownloadCv;
