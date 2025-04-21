import { useState ,useEffect} from "react";
import sample from "./sample";
import "./App.css";
import InfoTypeBtn from "./components/infoTypeBtn";
import EnterInfo from "./components/enterInfo";
import Resume from "./components/resume";
import "./css/info.css";
import "./css/resume.css";
import "./css/left.css";
import "./css/right.css";
// import { html2pdf } from "html2pdf.js";
import { useRef } from "react";

function App() {
  const ref = useRef(null);
  const [infoType, setInfoType] = useState(0);
  // const [personalDetails, setPersonalDetails] = useState(
  //   sample.personalDetails,
  // );
  // const [educationDetails, setEducationDetails] = useState(sample.Education);
  // const [experienceDetails, setExperienceDetails] = useState(sample.Experience);
  // const [projectDetails,setProjectDetails]=useState(sample.Project);
  // const [skillDetails, setSkillDetails] = useState(sample.Skill);

  const [skillDetails, setSkillDetails] = useState(() => {
    const savedSkill = localStorage.getItem('skill');
    return savedSkill ? JSON.parse(savedSkill) : sample.Skill;
  });
  const [personalDetails, setPersonalDetails] = useState(() => {
    const savedPersonal = localStorage.getItem('personalDetails');
    return savedPersonal ? JSON.parse(savedPersonal) : sample.personalDetails;
  });
  
  const [educationDetails, setEducationDetails] = useState(() => {
    const savedEducation = localStorage.getItem('educationDetails');
    return savedEducation ? JSON.parse(savedEducation) : sample.Education;
  });
  
  const [experienceDetails, setExperienceDetails] = useState(() => {
    const savedExperience = localStorage.getItem('experienceDetails');
    return savedExperience ? JSON.parse(savedExperience) : sample.Experience;
  });
  
  const [projectDetails, setProjectDetails] = useState(() => {
    const savedProject = localStorage.getItem('projectDetails');
    return savedProject ? JSON.parse(savedProject) : sample.Project;
  });


  // Save skillDetails to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('personalDetails', JSON.stringify(personalDetails));
  }, [personalDetails]);

  useEffect(() => {
    localStorage.setItem('educationDetails', JSON.stringify(educationDetails));
  }, [educationDetails]);

  useEffect(() => {
    localStorage.setItem('experienceDetails', JSON.stringify(experienceDetails));
  }, [experienceDetails]);

  useEffect(() => {
    localStorage.setItem('projectDetails', JSON.stringify(projectDetails));
  }, [projectDetails]);
  useEffect(() => {
    localStorage.setItem('skill', JSON.stringify(skillDetails));
  }, [skillDetails]);
 

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
          <button onClick={() => window.print()}>Download (ATS Friendly)</button>
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
            projectDetails={projectDetails}
            setProjectDetails={setProjectDetails}
            skillDetails={skillDetails}
            setSkillDetails={setSkillDetails}
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
          projectDetails={projectDetails}
          skillDetails={skillDetails}
        />
      </div>
    </>
  );
}

export default App;
