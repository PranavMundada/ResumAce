import InputList from "./inputList";
import AddBtn from "./addbtn";
import Input from "./input";

function Experience({
  experienceDetails,
  setExperienceDetails,
  exp,
  expno,
  setExp,
  setExpno,
}) {
  function changeCompany(e) {
    setExperienceDetails((previnfo) =>
      previnfo.map((info, index) =>
        index === expno ? { ...info, companyName: e.target.value } : info,
      ),
    );
  }
  function changePosition(e) {
    setExperienceDetails((previnfo) =>
      previnfo.map((info, index) =>
        index === expno ? { ...info, positionTitle: e.target.value } : info,
      ),
    );
  }
  function changeStart(e) {
    setExperienceDetails((previnfo) =>
      previnfo.map((info, index) =>
        index === expno ? { ...info, startDate: e.target.value } : info,
      ),
    );
  }
  function changeEnd(e) {
    setExperienceDetails((previnfo) =>
      previnfo.map((info, index) =>
        index === expno ? { ...info, endDate: e.target.value } : info,
      ),
    );
  }
  function changeLocation(e) {
    setExperienceDetails((previnfo) =>
      previnfo.map((info, index) =>
        index === expno ? { ...info, location: e.target.value } : info,
      ),
    );
  }
  function changeDescription(e) {
    setExperienceDetails((previnfo) =>
      previnfo.map((info, index) =>
        index === expno ? { ...info, description: e.target.value } : info,
      ),
    );
  }

  function saveElement() {
    setExp(0);
  }

  function deleteElement() {
    setExperienceDetails((prevExperienceDetails)=>
      prevExperienceDetails.filter((info,index)=> index!==expno))
    setExp(0);
  }

  function addExperience() {
    setExperienceDetails((prevExperienceDetails) => [
      ...prevExperienceDetails,
      {
        companyName: "",
        positionTitle: "",
        startDate: "",
        endDate: "",
        location: "",
        description:""
      },
    ]);
  }

  if (exp === 0) {
    return (
      <>
        <h2>Experience</h2>
        <InputList
          info={experienceDetails}
          setInfo={setExperienceDetails}
          type={1}
          exp={exp}
          expno={expno}
          setExp={setExp}
          setExpno={setExpno}
        />
        <AddBtn btnName="+ Experience" func={addExperience} />
      </>
    );
  } else {
    if (expno === -1) {
      return <></>;
    } else {
      return (
        <>
          <h2>Experience:</h2>
          <label>Company Name:</label>
          <Input val={experienceDetails[expno].companyName} onchange={changeCompany} />
          <label>Position Title:</label>
          <Input val={experienceDetails[expno].positionTitle} onchange={(e)=>changePosition(e)} />
          <label>Start Date:</label>
          <Input
            val={experienceDetails[expno].startDate}
            onchange={changeStart}
          />
          <label>End Date :</label>
          <Input val={experienceDetails[expno].endDate} onchange={changeEnd} />
          <label>Location :</label>
          <Input
            val={experienceDetails[expno].location}
            onchange={(e) => changeLocation(e)}
          />
          <label>Description :</label>
          <Input
            val={experienceDetails[expno].description}
            onchange={(e) => changeDescription(e)}
          />
          <div className="btns">
            <button className="delBtn"onClick={deleteElement}>Delete</button>
            <button className="saveBtn" onClick={saveElement}>Save</button>
          </div>
        </>
      );
    }
  }
}

export default Experience;
