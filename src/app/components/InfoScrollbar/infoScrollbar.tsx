import DownloadCv from "../downloadCV/downloadCV";
import HardSkills from "../hardSkills/hardSkills";
import KnowlageList from "../knowlageList/knowlageList";
import LangSkills from "../langSkills/langSkills";
import './infoScrollbar.css'

function InfoScrollbar() {

  return (
      <div className="info-scrollbar">
        <div className="infoTable pt-15 pb-15">
            <ul>
                <li> <h6>Residence:</h6> Armenia</li>
                <li> <h6>City:</h6> Yerevan</li>
            </ul>
        </div>
        <div className="ls-divider"></div>
        <LangSkills />
        <div className="ls-divider"></div>
        <HardSkills />
        <div className="ls-divider"></div>
        <KnowlageList />
        <div className="ls-divider"></div>
        <DownloadCv />
      </div>
  )
}

export default InfoScrollbar