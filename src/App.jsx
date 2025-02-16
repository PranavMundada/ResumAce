import { useState } from "react";
import sample from "./sample";
import "./App.css";
import InfoTypeBtn from "./components/infoTypeBtn";
import EnterInfo from "./components/enterInfo";
import Resume from "./components/resume";
import "./css/info.css";
import "./css/resume.css";
import "./css/left.css";
import "./css/right.css";
import { html2pdf } from "html2pdf.js";
import { useRef } from "react";

function App() {
  const ref=useRef(null);
  const [infoType, setInfoType] = useState(0);
  const [personalDetails, setPersonalDetails] = useState(
    sample.personalDetails,
  );
  const [educationDetails, setEducationDetails] = useState(sample.Education);
  const [experienceDetails, setExperienceDetails] = useState(sample.Experience);
  const [accentColor, setAccentColor] = useState("black");
  const [textColor, setTextColor] = useState("#ffffff");
  const [layout, setLayout] = useState("top");
  const [font, setFont] = useState("Sans");

  function showContent() {
    setInfoType(0);
  }
  function showCustomize() {
    setInfoType(1);
  }

  return (
    <>
      <header>
        <h1 id="heading">ResumAce</h1>
      </header>
      <div className="mainPage">
        <div id="info">
          <div id="infoType">
            <InfoTypeBtn onclick={showContent} btnName="Content" />
            <InfoTypeBtn onclick={showCustomize} btnName="Customize" />
          </div>
          <div id="download">
          <button onClick={()=>{
          const element=ref.current;
          console.log(element);
          const options = {
            margin: 0,
            filename: `${personalDetails.fullName} resume.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
          };
          import("html2pdf.js").then((html2pdf) => {
            html2pdf.default().from(element).set(options).save();
        });
        }}>Download Resume</button>
          </div>
          <EnterInfo
            infotype={infoType}
            personalDetails={personalDetails}
            setpersonalDetails={setPersonalDetails}
            educationDetails={educationDetails}
            setEducationDetails={setEducationDetails}
            experienceDetails={experienceDetails}
            setExperienceDetails={setExperienceDetails}
            accentColor={accentColor}
            setAccentColor={setAccentColor}
            textColor={textColor}
            setTextColor={setTextColor}
            layout={layout}
            setLayout={setLayout}
            font={font}
            setFont={setFont}
            ref={ref}
          />
        </div>
        <Resume
          personalDetails={personalDetails}
          educationDetails={educationDetails}
          experienceDetails={experienceDetails}
          accentColor={accentColor}
          setAccentColor={setAccentColor}
          textColor={textColor}
          setTextColor={setTextColor}
          layout={layout}
          setLayout={setLayout}
          font={font}
          setFont={setFont}
          ref={ref}
        />
      </div>
    </>
  );
}

export default App;
