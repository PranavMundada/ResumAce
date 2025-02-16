import InputList from "./inputList";
import AddBtn from "./addbtn";
import Input from "./input";

function Education({
  educationDetails,
  setEducationDetails,
  edu,
  eduno,
  setEdu,
  setEduno,
}) {
  function changeSchool(e) {
    setEducationDetails((previnfo) => 
        previnfo.map((info, index) =>
            index === eduno ? { ...info, school: e.target.value } : info
        )
    );
  }
  function changeDegree(e) {
    setEducationDetails((previnfo) => 
        previnfo.map((info, index) =>
            index === eduno ? { ...info, degree: e.target.value } : info
        )
    );
  }
  function changeStart(e) {
    setEducationDetails((previnfo) => 
        previnfo.map((info, index) =>
            index === eduno ? { ...info, startDate: e.target.value } : info
        )
    );
  }
  function changeEnd(e) {
    setEducationDetails((previnfo) => 
        previnfo.map((info, index) =>
            index === eduno ? { ...info, endDate: e.target.value } : info
        )
    );
  }
  function changeLocation(e) {
    setEducationDetails((previnfo) => 
        previnfo.map((info, index) =>
            index === eduno ? { ...info, location: e.target.value } : info
        )
    );
}


  function saveElement(){
    setEdu(0);
  }

  function deleteElement(){
    setEducationDetails((prevEducationDetails)=>
      prevEducationDetails.filter((info,index)=> index!==eduno))
    setEdu(0);
  }

  function addEducation() {
    setEducationDetails(prevEducationDetails => [
        ...prevEducationDetails, 
        {
            school: "",
            degree: "",
            startDate: "",
            endDate: "",
            location: ""
        }
    ]);
}


  if (edu === 0) {
    return (
      <>
        <h2>Education</h2>
        <InputList
          info={educationDetails}
          setInfo={setEducationDetails}
          type={0}
          edu={edu}
          eduno={eduno}
          setEdu={setEdu}
          setEduno={setEduno}
        />
        <AddBtn btnName="+ Education" func={addEducation} />
      </>
    );
  } else {
    if (eduno === -1) {
      return <></>;
    } else {
      return (
        <>
          <h2>Education:</h2>
          <label>School:</label>
          <Input val={educationDetails[eduno].school} onchange={changeSchool} />
          <label>Degree:</label>
          <Input val={educationDetails[eduno].degree} onchange={changeDegree} />
          <label>Start Date:</label>
          <Input val={educationDetails[eduno].startDate} onchange={changeStart} />
          <label>End Date :</label>
          <Input val={educationDetails[eduno].endDate} onchange={changeEnd} />
          <label>Location :</label>
          <Input val={educationDetails[eduno].location} onchange={(e)=>changeLocation(e)} />
          <div className="btns">
            <button className="delBtn" onClick={deleteElement}>Delete</button>
            <button  className="saveBtn" onClick={saveElement}>Save</button>
          </div>
        </>
      );
    }
  }
}

export default Education;
