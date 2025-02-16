function InfoTypeBtn({onclick,btnName}){
    return(
        <>
            <button className="infoTypeBtn" onClick={()=>onclick()} >{btnName}</button>
        </>
    )
}

export default InfoTypeBtn;