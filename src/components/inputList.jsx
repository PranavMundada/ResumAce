import InputListElement from "./inputListElement";

function InputList({ info, setInfo, type, edu, eduno, setEdu, setEduno ,exp,expno,setExp,setExpno}) {
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
  else{
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
}

export default InputList;
