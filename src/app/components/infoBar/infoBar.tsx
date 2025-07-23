import Header from "../header/header"
import InfoScrollbar from "../InfoScrollbar/infoScrollbar"
import SocialBlock from "../socialBlock/socialBlock"
import './infoBar.css'

function InfoBar() {

  return (
    <>
      <div className="info-bar">
        <div className="info-bar-frame pr-15 pl-15">
            <Header />
            <InfoScrollbar />
            <SocialBlock />
        </div>
      </div>
    </>
  )
}

export default InfoBar