import InputList from "./inputList";
import AddBtn from "./addbtn";
import Input from "./input";

function Skill({
  skillDetails,
  setSkillDetails,
  skill,
  skillno,
  setSkill,
  setSkillno,
}) {
  function changeSkill(e) {
    setSkillDetails((previnfo) =>
      previnfo.map((info, index) =>
        index === skillno ? { ...info, details: e.target.value } : info,
      ),
    );
  }
//   function changeStart(e) {
//     setSkillDetails((previnfo) =>
//       previnfo.map((info, index) =>
//         index === expno ? { ...info, startDate: e.target.value } : info,
//       ),
//     );
//   }
//   function changeEnd(e) {
//     setSkillDetails((previnfo) =>
//       previnfo.map((info, index) =>
//         index === expno ? { ...info, endDate: e.target.value } : info,
//       ),
//     );
//   }
//   function changeLocation(e) {
//     setSkillDetails((previnfo) =>
//       previnfo.map((info, index) =>
//         index === expno ? { ...info, location: e.target.value } : info,
//       ),
//     );
//   }
//   function changeDescription(e) {
//     setSkillDetails((previnfo) =>
//       previnfo.map((info, index) =>
//         index === expno ? { ...info, description: e.target.value } : info,
//       ),
//     );
//   }

  function saveElement() {
    setSkill(0);
  }

  function deleteElement() {
    setSkillDetails((prevSkillDetails) =>
      prevSkillDetails.filter((info, index) => index !== skillno),
    );
    setSkill(0);
  }

  function addSkill() {
    setSkillDetails((prevSkillDetails) => [
      ...prevSkillDetails,
      {
        details: "",
      },
    ]);
  }

  if (skill === 0) {
    return (
      <>
        <h2>Skill</h2>
        <InputList
          info={skillDetails}
          setInfo={setSkillDetails}
          type={3}
          Skill={skill}
          skillno={skillno}
          setSkill={setSkill}
          setSkillno={setSkillno}
        />
        <AddBtn btnName="+ Skill" func={addSkill} />
      </>
    );
  } else {
    if (skillno === -1) {
      return <></>;
    } else {
      return (
        <>
          <h2>Skill:</h2>
          <label>Description :</label>
          <Input
            val={skillDetails[skillno].details}
            onchange={(e) => changeSkill(e)}
          />
          <div className="btns">
            <button className="delBtn" onClick={deleteElement}>
              Delete
            </button>
            <button className="saveBtn" onClick={saveElement}>
              Save
            </button>
          </div>
        </>
      );
    }
  }
}

export default Skill;
