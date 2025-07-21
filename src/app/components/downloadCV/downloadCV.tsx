import DownloadIcon from "@mui/icons-material/Download";
import "./downloadCV.css";

const DownloadCv = () => {
  return (
    <div className="download pt-30">
      <a
        href="/DavitSahakyan.pdf"
        download="Davit_Sahakyan_CV.pdf"
        className="download-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Download CV</span>
        <DownloadIcon />
      </a>
    </div>
  );
};

export default DownloadCv;
