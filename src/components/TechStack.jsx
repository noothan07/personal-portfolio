import cImg from "../assets/skills/clang.png";
import pythonImg from "../assets/skills/python.png";
import javaImg from "../assets/skills/java.png";
import htmlImg from "../assets/skills/html.png";
import cssImg from "../assets/skills/css.png";
import jsImg from "../assets/skills/javascript.png";
import reactImg from "../assets/skills/reactlib.png";
import sqlImg from "../assets/skills/mysqllogo.png";
import bootstrapImg from "../assets/skills/bootstrap.png";
import vscodeImg from "../assets/skills/vscode.png";
import psImg from "../assets/skills/photoshop.png";
import nodejsImg from "../assets/skills/nodejs.png";
import expressImg from "../assets/skills/express.png";
import mongodbImg from "../assets/skills/mongodb.png";
import tailwindImg from "../assets/skills/tailwindcss.png";

export default function TechStack() {
  const data = [
    { img: htmlImg, data: "HTML" },
    { img: cssImg, data: "CSS" },
    { img: mongodbImg, data: "MongoDB" },
    { img: expressImg, data: "ExpressJS" },
    { img: reactImg, data: "ReactJS" },
    { img: nodejsImg, data: "NodeJS" },
    { img: tailwindImg, data: "tailwind CSS" },
    { img: pythonImg, data: "Python" },
    { img: cImg, data: "C" },
    { img: sqlImg, data: "MySQL" },
    { img: vscodeImg, data: "VS Code" },
    { img: psImg, data: "Photoshop" },
  ];

  return (
    <section className="sec4 lazy-load">
      <div className="techstack">
        {/* Heading */}
        <div className="techstack-heading" data-aos="fade-up">
          <h1>MY TECH STACK</h1>
        </div>
        <div className="TechStack-list">
          {data.map((a, i) => (
            <div
              key={i}
              className="techstack-items"
              data-aos="zoom-in"
            >
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
