import ShowBtn from "./showBtn";

function InputListElement({
  item,
  type,
  setInfo,
  index,
  p,
  pno,
  setP,
  setPno,
}) {
  if (type === 0) {
    return (
      <div className="listElement">
        <h4>{item.school}</h4>
        <ShowBtn
          key={index}
          index={index}
          item={item}
          setInfo={setInfo}
          p={p}
          pno={pno}
          setP={setP}
          setPno={setPno}
        />
      </div>
    );
  }
  else if(type===1){
    return (
      <div className="listElement">
        <h4>{item.companyName}</h4>
        <ShowBtn
          key={index}
          index={index}
          item={item}
          setInfo={setInfo}
          p={p}
          pno={pno}
          setP={setP}
          setPno={setPno}
        />
      </div>
    );
  }
  else if(type === 2){
    return (
      <div className="listElement">
        <h4>{item.projectName}</h4>
        <ShowBtn
          key={index}
          index={index}
          item={item}
          setInfo={setInfo}
          p={p}
          pno={pno}
          setP={setP}
          setPno={setPno}
        />
      </div>
    )
  }
  else{
    return (
      <div className="listElement">
        <h4>{item.details}</h4>
        <ShowBtn
          key={index}
          index={index}
          item={item}
          setInfo={setInfo}
          p={p}
          pno={pno}
          setP={setP}
          setPno={setPno}
        />
      </div>
    )
  }
}

export default InputListElement;
