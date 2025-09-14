import React from "react";

export default function AboutMe(){
    const AboutData =[
        {
            timeline:"2023-present",
            branch:"diploma in computer engineering",
            clgname:"@ andhra polytechnic",
            data:`I'm currently pursuing my diploma in computer engineering
                    at Andhra Polytechnic (APT), kakinada. This college provides a strong academic foundation
                    and hands-on learning environment that fuels my passion for technology and innovation.`
        },
        {
            timeline:"2018-2023",
            branch:"high school - SSC (10th)",
            clgname:"@ zilla parishad high school",
            data:`I completed my 6th to SSC 10th grade under the state curriculum at Zilla Parishad High School.
                 The school provided a well-rounded education that strengthened my fundamentals and 
                 nurtured a disciplined learning approach.`
        }
    ];
    return(
        <div className="about" >
            <div className="title" data-aos="fade-up">
                <h1>about me</h1>
            </div>
            <div className="study-container ">
                    {AboutData.map((a,i) => (
                        <div className="study" data-aos="fade-up" key={i}>
                            <p className="timeline">{a.timeline}</p>
                            <h1 className="branch">{a.branch}</h1>
                            <p className="clgname">{a.clgname}</p>
                            <p className="data">{a.data}</p>
                        </div>
                    ))}
            </div>
        </div>
    )
};