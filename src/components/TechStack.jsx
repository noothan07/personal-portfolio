import C from "../assets/skills/c.png";
import Python from "../assets/skills/python.png";
import Java from "../assets/skills/java.png";
import HTML from "../assets/skills/html.png";
import CSS from "../assets/skills/css-3.png";
import JS from "../assets/skills/javascript.png";
import reactjs from "../assets/skills/react.png";
import sql from "../assets/skills/mysql.png";
import BootStrap from "../assets/skills/bootstrap.png";
import vscode from "../assets/skills/vscode.png";

export default function TechStack() {

    const data = [
      {img:HTML,data: "html"},
      {img:CSS,data: "css"},
      {img:JS,data: "javascript"},
      {img:reactjs,data: "reactjs"},
      {img:BootStrap,data: "bootstrap"},
      {img:Python,data: "Python"},
      {img:Java,data: "java"},
      {img:C,data: "C"},
      {img:sql,data: "MySql"},
      {img:vscode,data: "vscode"}
    ];

  return (
    <section className="sec4 lazy-load">
      <div className="techstack">
        {/* Heading */}
        <div className="techstack-heading" data-aos="fade-up">
          <h1>MY TECH STACK</h1>
        </div>
        <div className="TechStack-list">
          {data.map((a,i) => (              
            <div className="techstack-items" data-aos="zoom-in" aos-data-duration="1000">
              <div className="tech">
                <img src={a.img} alt={a.data} />
                <p>{a.data}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
