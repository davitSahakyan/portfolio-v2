import Banner from "../banner/banner"
import './mainContent.css'
import CounterFrames from "../counterFrames/counterFrames"
import ColumnInfo from "../columnProgressBar/columnInfo"
import { getEducationData, getExperienceData } from "../../../../lib/contentful"
import { ColumnInfoItem } from "@/app/interfaces/interfaces"

async function MainContent() {
  const educationData = await getEducationData() as unknown as ColumnInfoItem[];
  const experienceData = await getExperienceData() as unknown as ColumnInfoItem[];

  return (
    <>
      <div className="main-content">
         <div className="top-background" style={{ backgroundImage: `url(/assets/images/background.jpg)` }}>
           <div className="top-background-overlay"></div>
         </div>
         <div className="content-scrollbar" id="content-scrollbar">
            <Banner />
            <div className="section-container">
              <CounterFrames />
            </div>
            <div className="section-container bio-info">
              <ColumnInfo heading="Education" items={educationData}/>
              <ColumnInfo heading="Experience" items={experienceData}/>
            </div>
         </div>
      </div>
    </>
  )
}

export default MainContent