import InputListElement from "./inputListElement";

function InputList({ info, setInfo, type, edu, eduno, setEdu, setEduno ,exp,expno,setExp,setExpno,project,setProject,projno,setProjno,skill,setSkill,skillno,setSkillno}) {
  if (type === 0) {
    return (
      <>
        {info.map((item, index) => {
          console.log(item);
          return (
            <InputListElement
              key={index}
              index={index}
              item={item}
              setInfo={setInfo}
              type={type}
              p={edu}
              pno={eduno}
              setP={setEdu}
              setPno={setEduno}
            />
          );
        })}
      </>
    );
  }
  else if(type === 1){
    return (
      <>
        {info.map((item, index) => {
          console.log(item);
          return (
            <InputListElement
              key={index}
              index={index}
              item={item}
              setInfo={setInfo}
              type={type}
              p={exp}
              pno={expno}
              setP={setExp}
              setPno={setExpno}
            />
          );
        })}
      </>
    );
  }
  else if(type === 2){
    return (
      <>
        {info.map((item, index) => {
          console.log(item);
          return (
            <InputListElement
              key={index}
              index={index}
              item={item}
              setInfo={setInfo}
              type={type}
              p={project}
              pno={projno}
              setP={setProject}
              setPno={setProjno}
            />
          );
        })}
      </>
    );
  }
  else{
    return(
      <>
      {info.map((item, index) => {
          console.log(item);
          return (
            <InputListElement
              key={index}
              index={index}
              item={item}
              setInfo={setInfo}
              type={type}
              p={skill}
              pno={skillno}
              setP={setSkill}
              setPno={setSkillno}
            />
          );
        })}
      </>
    )
  }
}

export default InputList;
