import InputList from "./inputList";
import AddBtn from "./addbtn";
import Input from "./input";

function Projects({
  projectDetails,
  setProjectDetails,
  project,
  projno,
  setProject,
  setProjno,
}) {
  function changeProject(e) {
    setProjectDetails((previnfo) =>
      previnfo.map((info, index) =>
        index === projno ? { ...info, projectName: e.target.value } : info,
      ),
    );
  }
  function changeAbout(e) {
    setProjectDetails((previnfo) =>
      previnfo.map((info, index) =>
        index === projno ? { ...info, about: e.target.value } : info,
      ),
    );
  }
//   function changeStart(e) {
//     setProjectDetails((previnfo) =>
//       previnfo.map((info, index) =>
//         index === expno ? { ...info, startDate: e.target.value } : info,
//       ),
//     );
//   }
//   function changeEnd(e) {
//     setProjectDetails((previnfo) =>
//       previnfo.map((info, index) =>
//         index === expno ? { ...info, endDate: e.target.value } : info,
//       ),
//     );
//   }
//   function changeLocation(e) {
//     setProjectDetails((previnfo) =>
//       previnfo.map((info, index) =>
//         index === expno ? { ...info, location: e.target.value } : info,
//       ),
//     );
//   }
//   function changeDescription(e) {
//     setProjectDetails((previnfo) =>
//       previnfo.map((info, index) =>
//         index === expno ? { ...info, description: e.target.value } : info,
//       ),
//     );
//   }

  function saveElement() {
    setProject(0);
  }

  function deleteElement() {
    setProjectDetails((prevProjectDetails) =>
      prevProjectDetails.filter((info, index) => index !== projno),
    );
    setProject(0);
  }

  function addProject() {
    setProjectDetails((prevProjectDetails) => [
      ...prevProjectDetails,
      {
        projectName: "",
        about:""
      },
    ]);
  }

  if (project === 0) {
    return (
      <>
        <h2>Project</h2>
        <InputList
          info={projectDetails}
          setInfo={setProjectDetails}
          type={2}
          project={project}
          projno={projno}
          setProject={setProject}
          setProjno={setProjno}
        />
        <AddBtn btnName="+ Project" func={addProject} />
      </>
    );
  } else {
    if (projno === -1) {
      return <></>;
    } else {
      return (
        <>
          <h2>Project:</h2>
          <label>Project Name:</label>
          <Input
            val={projectDetails[projno].projectName}
            onchange={changeProject}
          />
          <label>Description :</label>
          <Input
            val={projectDetails[projno].about}
            onchange={(e) => changeAbout(e)}
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

export default Projects;
