"use client";
import CircularWithValueLabel from "../progress/progressCircle/ProgressCircle";
import "./langSkills.css"

const data = [
   {langName: "Armenian", langLvl: 100, finalTextShown: ""},
   {langName: "Russian", langLvl: 80, finalTextShown: ""},
   {langName: "English", langLvl: 80, finalTextShown: "B2"}
]

function LangSkills() {
  return (
      <div className="lang-skills pt-15">
        {data.map(item => {
            return (<div key={item.langName} className="lang-skills-item">
                <CircularWithValueLabel startValue={0} endValue={item.langLvl} finalTextShown={item.finalTextShown}/>
                <h6 className="mt-10">{item.langName}</h6>
            </div>)
        })}
      </div>
  )
}

export default LangSkills