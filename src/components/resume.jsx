import { useRef } from "react";

function Resume({personalDetails,educationDetails,experienceDetails,accentColor,setAccentColor,textColor,setTextColor,layout,setLayout,font,setFont,ref}){
    return(
        <>
            <div id="resume" ref={ref} className={layout} style={{fontFamily:font}}>
                <header id="head" className={layout} style={{backgroundColor:accentColor,color:textColor,fontFamily:font}}>
                    <h1>{personalDetails.fullName}</h1>
                    <div id="otherDetails" className={layout}>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg"  width="20px" height="20px" fill={textColor} viewBox="0 0 128 96"  id="email"><g id="Layer_2"><path id="Icons" d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z"></path></g></svg>
                        <p>{personalDetails.email}</p>
                        </div>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill={textColor} viewBox="0 0 32 32" id="phone"><path d="M13.216 8.064c-.382-4.394-4.966-6.55-5.16-6.638a.974.974 0 0 0-.582-.078c-5.292.878-6.088 3.958-6.12 4.086a.99.99 0 0 0 .02.54c6.312 19.584 19.43 23.214 23.742 24.408.332.092.606.166.814.234a.99.99 0 0 0 .722-.042c.132-.06 3.248-1.528 4.01-6.316a.997.997 0 0 0-.096-.612c-.068-.132-1.698-3.234-6.218-4.33a.977.977 0 0 0-.884.21c-1.426 1.218-3.396 2.516-4.246 2.65-5.698-2.786-8.88-8.132-9-9.146-.07-.57 1.236-2.572 2.738-4.2a.998.998 0 0 0 .26-.766z"></path></svg>
                        <p>{personalDetails.phoneNumber}</p>
                        </div>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill={textColor} viewBox="0 0 24 24" id="location"><path d="M12,2a8.009,8.009,0,0,0-8,8c0,3.255,2.363,5.958,4.866,8.819,0.792,0.906,1.612,1.843,2.342,2.791a1,1,0,0,0,1.584,0c0.73-.948,1.55-1.885,2.342-2.791C17.637,15.958,20,13.255,20,10A8.009,8.009,0,0,0,12,2Zm0,11a3,3,0,1,1,3-3A3,3,0,0,1,12,13Z"></path></svg>
                        <p>{personalDetails.address}</p>
                        </div>
                    </div>
                </header>
                <div id="details" className={layout}>
                    <div id="educationSection" className={layout}>
                        <h2>Education</h2>
                        {
                            educationDetails.map((item,index)=>{
                                return (
                                        <div key={index} className="edBlock">
                                            <div className="timeLoc">
                                                <div className="time">{item.startDate}-{item.endDate}</div>
                                                <div className="loc">{item.location}</div>
                                            </div>
                                            <div className="edDetails">
                                                <div className="school"><h4>{item.school}</h4></div>
                                                <div className="degree">{item.degree}</div>
                                            </div>
                                        </div>
                                )
                            })
                        }
                    </div>
                    <div id="experienceSection" className={layout}>
                    <h2>Experience</h2>
                        {
                            experienceDetails.map((item,index)=>{
                                return (
                                        <div key={index} className="edBlock">
                                            <div className="timeLoc">
                                                <div className="time">{item.startDate}-{item.endDate}</div>
                                                <div className="loc">{item.location}</div>
                                            </div>
                                            <div className="edDetails">
                                                <div className="company"><h4>{item.companyName}</h4></div>
                                                <div className="position">{item.positionTitle}</div>
                                                <div className="description">{item.description}</div>
                                            </div>
                                        </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume;