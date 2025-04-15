import Input from "./input";
import AddBtn from "./addbtn";
import InputList from "./inputList";
import Education from "./education";
import Experience from "./experience";
import Projects from "./projects";
import { useState } from "react";
import Skill from "./skills";

function EnterInfo({
  infotype,
  personalDetails,
  setpersonalDetails,
  setEducationDetails,
  educationDetails,
  experienceDetails,
  setExperienceDetails,
  accentColor,
  setAccentColor,
  textColor,
  setTextColor,
  layout,
  setLayout,
  font,
  setFont,
  ref,
  projectDetails,
  setProjectDetails,
  skillDetails,
  setSkillDetails
}) {
  const [edu, setEdu] = useState(0);
  const [eduno, setEduno] = useState(0);
  const [exp, setExp] = useState(0);
  const [expno, setExpno] = useState(0);
  const [project,setProject]=useState(0);
  const [projno,setProjno]=useState(0);
  const [skill,setSkill]=useState(0);
  const [skillno,setSkillno]=useState(0);

  function changeFullName(e) {
    setpersonalDetails((previnfo) => ({
      ...previnfo,
      fullName: e.target.value,
    }));
  }

  function changeEmail(e) {
    setpersonalDetails((previnfo) => ({
      ...previnfo,
      email: e.target.value,
    }));
  }

  function changePhoneNo(e) {
    setpersonalDetails((previnfo) => ({
      ...previnfo,
      phoneNumber: e.target.value,
    }));
  }

  function changeAddress(e) {
    setpersonalDetails((previnfo) => ({
      ...previnfo,
      address: e.target.value,
    }));
  }

  function changeAccentColor(e) {
    setAccentColor(e.target.value);
  }

  function changeTextColor(e) {
    setTextColor(e.target.value);
  }

  if (infotype === 1) {
    return (
      <>
        <div id="layout">
          <h2>Layout</h2>
          <div id="layoutTypes">
            <div id="top" onClick={()=>setLayout("top")}>
              <div id="topcolor">
                <div
                  id="topcolorc"
                  style={{ backgroundColor: accentColor }}
                ></div>
                <div id="topcolorw"></div>
              </div>
              <p>Top</p>
            </div>
            <div id="left" onClick={()=>setLayout("left")}>
              <div id="leftcolor">
                <div
                  id="leftcolorc"
                  style={{ backgroundColor: accentColor }}
                ></div>
                <div id="leftcolorw"></div>
              </div>
              <p>Left</p>
            </div>
            <div id="right" onClick={()=>setLayout("right")}>
              <div id="rightcolor">
                <div id="rightcolorw"></div>
                <div
                  id="rightcolorc"
                  style={{ backgroundColor: accentColor }}
                ></div>
              </div>
              <p>Right</p>
            </div>
          </div>
        </div>
        <div id="color">
          <h2>Color</h2>
          <div id="accentColor">
            <label>Accent Color:</label>
            <input
              type="color"
              name="accent"
              id="accent"
              value={accentColor}
              onChange={changeAccentColor}
            />
          </div>
          <div id="textColor">
            <label>Text Color:</label>
            <input
              type="color"
              name="text"
              id="text"
              value={textColor}
              onChange={changeTextColor}
            />
          </div>
        </div>
        <div id="fonts">
          <h2>Fonts</h2>
          <div id="fontBtns">
              <div style={{fontFamily:"sans-serif"}} onClick={()=>setFont("sans")}>
                <h2>Aa</h2>
                <p>Sans</p>
              </div>
              <div style={{fontFamily:"serif"}} onClick={()=>setFont("serif")}>
                <h2>Aa</h2>
                <p>Serif</p>
              </div>
              <div style={{fontFamily:"monospace"}} onClick={()=>setFont("monospace")}>
                <h2>Aa</h2>
                <p>Mono</p>
              </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div id="personalDetails">
          <h2>Personal Details:</h2>
          <label>Full Name:</label>
          <Input val={personalDetails.fullName} onchange={changeFullName} />
          <label>Email:</label>
          <Input val={personalDetails.email} onchange={changeEmail} />
          <label>Phone Number:</label>
          <Input val={personalDetails.phoneNumber} onchange={changePhoneNo} />
          <label>Address :</label>
          <Input val={personalDetails.address} onchange={changeAddress} />
          <br />
        </div>
        <div id="education">
          <Education
            educationDetails={educationDetails}
            setEducationDetails={setEducationDetails}
            edu={edu}
            eduno={eduno}
            setEdu={setEdu}
            setEduno={setEduno}
          />
        </div>
        <div id="experience">
          <Experience
            experienceDetails={experienceDetails}
            setExperienceDetails={setExperienceDetails}
            exp={exp}
            expno={expno}
            setExp={setExp}
            setExpno={setExpno}
          />
        </div>
        <div id="projects">
        <Projects
            projectDetails={projectDetails}
            setProjectDetails={setProjectDetails}
            project={project}
            projno={projno}
            setProject={setProject}
            setProjno={setProjno}
          />
        </div>
        <div id="skills">
        <Skill
            skillDetails={skillDetails}
            setSkillDetails={setSkillDetails}
            skill={skill}
            skillno={skillno}
            setSkill={setSkill}
            setSkillno={setSkillno}
          />
        </div>
      </>
    );
  }
}

export default EnterInfo;
