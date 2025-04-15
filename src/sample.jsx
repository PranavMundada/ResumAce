import Projects from "./components/projects";

const sample={
    personalDetails:{
        fullName:"Pranav Mundada",
        email:"pjmundada2005@gmail.com",
        phoneNumber:"+91 7028817505",
        address:"Pune,India"
    },
    Education:[
        {
            school:"Indian Institute of Information Technology , Pune",
            degree:"B.Tech",
            startDate:"May 2023",
            endDate:"Present",
            location:"Pune ,India"
        }
    ],
    Experience:[
        {
            companyName:"XYZ Corp.",
            positionTitle:"Software Development Engineer",
            startDate:"May 2024",
            endDate:"Present",
            location:"Pune ,India",
            description:"Responsible for designing, developing, testing, and maintaining software applications."
        }
    ],
    Project:[
        {
            projectName:"Resume Builder",
            about:"Resume Builder is a sleek and user-friendly web application built with React, designed to help users effortlessly create professional resumes. It features dynamic form inputs, real-time preview, customizable templates, and a built-in PDF export powered by html2pdf, making resume creation quick, simple, and visually appealing."
        }
    ],
    Skill:[
        {
            details:"Skilled in Data Structure and Algorithm"
        }
    ]
}

export default sample;