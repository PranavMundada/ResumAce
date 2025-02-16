function AddBtn({btnName,func}){
    return(
        <button  className="addBtn" onClick={func}>{btnName}</button>
    )
}

export default AddBtn;