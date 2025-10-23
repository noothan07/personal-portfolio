import animeImg from "../assets/Screenshot 2025-09-06 102816.webp";
import calcImg from "../assets/cal_webview.webp";
import portfolioImg from "../assets/personal-portfolio.png";
import roboImg from "../assets/robo_3d.webp";
import todoList from "../assets/to-do-list-project.webp";
import resumaiImg from "../assets/resumai-webapp.png";
import ytDownloaderImg from "../assets/video-downloader.png";

const projects = [
  // {
  //   title: "Animate Website",
  //   view:"View project ➔",
  //   mobileTitle: "Animate Website",
  //   mobileDesc: "website where you can watch anime, webseries for free",
  //   span: `this website provides all anime and webseries for free, here you can enjoy without ads. 
  //          responsible for all devices,uploads the newly released animes and movies.`,
  //   details: [
  //     "+ responsive and modern design",
  //     "+ watch and download anime for free",
  //     "+ website is under development",
  //     "+ click below link to explore",
  //   ],
  //   img: animeImg,
  //   alt: "Anime Website",
  //   link: "https://noothan-portfolio.vercel.app/",
  //   tech: ["HTML", "CSS", "JavaScript"],
  //   gradientClass: "project-image project-red", // gradient class from CSS
  //   titleClass: "gradient-title title-red",
  //   heading: "website where you can watch anime, webseries for free",
  // },
  {
    title: "ResumAI Webapp",
    view:"View project ➔",
    mobileTitle: "ResumAI Webapp",
    mobileDesc: "An AI-powered coverletter and resume builder web application.",
    span: `Create professional cover letters and boost your hiring chances with
     intelligent keyword optimization and ATS-friendly formatting using AI-powered insights.`,
    details: [
      "+ responsive and modern design",
      "+ craft professional resumes and cover letters",
      "+ light and dark mode for better UX",
      "+ click below link to view project",
    ],
    img: resumaiImg,
    alt: "Anime Website",
    link: "https://resumai1.vercel.app/",
    tech: ["Reactjs", "TailwindCSS", "Framer-motion","Gemini 2.0 API"],
    gradientClass: "project-image project-blue", // gradient class from CSS
    titleClass: "gradient-title title-blue",
    heading: "An AI-powered coverletter and resume builder webapp",
  },
  {
    title: "yt-video downloader",
    view:"View project ➔",
    mobileTitle: "yt-video downloader",
    mobileDesc: "a webapp to download videos from youtube in various formats and resolutions.",
    span: `A simple web application that allows users to download videos and shorts from YouTube
           in various formats and resolutions with high quality audio.`,
    details: [
      "+ easy to use and simple interface",
      "+ download shorts and videos from youtube",
      "+ website under development, fixing bugs",
      "+ click below link to view project",
    ],
    img: ytDownloaderImg,
    alt: "yt-video downloader",
    link: "https://video-downloader-k3t8.onrender.com/",
    tech: ["HTML", "CSS", "Flask","yt-dlp"],
    gradientClass: "project-image project-red", // gradient class from CSS
    titleClass: "gradient-title title-red",
    heading: "a webapp to download videos and shorts from youtube.",
  },
  {
    title: "Modern Portfolio",
    view:"View project ➔",
    mobileTitle: "Modern Portfolio",
    mobileDesc: "Dynamic and interactive portfolio showcasing my work and skills.",
    span: `A portfolio built to showcase my work and skills,
           responsive design, and smooth interactions,anyone can contact me through this portfolio easily through the contact form or social links . `,
    details: [
      "+ interactive sections",
      "+ smooth animations with AOS and lenis",
      "+ responsive design for all devices",
      "+ click below link to view project",
    ],
    img: portfolioImg,
    alt: "Modern Portfolio",
    link: "https://noothan-portfolio.vercel.app/",
    tech: ["ReactJS", "CSS", "JavaScript","emailJS"],
    gradientClass: "project-image project-gold",
    titleClass: "gradient-title title-gold",
    heading: "Dynamic and interactive portfolio showcasing my work and skills.",
  },
  {
    title: "Calculator Web App",
    view:"View project ➔",
    mobileTitle: "Calculator App",
    mobileDesc: "A simple and creative calculator web app performs all arithmetic operations.",
    span: `A simple calculator web app built with HTML, CSS, and JS. 
           It has a clean interface and allows users to perform 
           addition, subtraction, multiplication, and division.`,
    details: [
      "+ easy to use interface",
      "+ accurate arithmetic operations",
      "+ responsive design",
      "+ click below link to view project",
    ],
    img: calcImg,
    alt: "Calculator Web App",
    link: "https://noothan07.github.io/calculator/",
    tech: ["HTML", "CSS", "JavaScript"],
    gradientClass: "project-image project-pink",
    titleClass: "gradient-title title-pink",
    heading: "A simple calculator web app performs all arithmetic operations.",
  },
  {
    title: "ToDo List Webpage",
    view:"View project ➔",
    mobileTitle: "ToDo List",
    mobileDesc: "Interactive todo list webpage to save our daily taks with localStorage features.",
    span: `A simple todo list webpage for note down our daily tasks and we can also easily add tasks, 
    remove tasks, stike off the completed tasks. this webpage is responsible for all devices .`,
    details: [
      "+ interactive todo list with features",
      "+ saves the tasks in localstorage",
      "+ responsive design for all devices",
      "+ click below link to view project",
    ],
    img: todoList,
    alt: "ToDo List",
    link: "https://to-do-list-noothan-nagala.vercel.app/",
    tech: ["ReactJS", "CSS", "JavaScript","bootstrap"],
    gradientClass: "project-image project-orange",
    titleClass: "gradient-title title-orange",
    heading: "Dynamic and interactive portfolio showcasing my work.",
  },
  {
    title: "Robotic Arm",
    view:"View project ➔",
    mobileTitle: "Robotic Arm",
    mobileDesc: "articulated robotic arm project showcasing CAD, GUI controls and implementation.",
    span: `A articulated robotic arm designed with CAD tools and integrated
           with manual controls for interactive movements using python tkinter GUI.`,
    details: [
      "+ CAD design for realistic model",
      "+ GUI controls for interaction",
      "+ innovative project for learning robotics",
      "+ click below link to explore project",
    ],
    img: roboImg,
    alt: "Robotic Arm",
    link: "https://noothan-portfolio.vercel.app/",
    tech: ["Arduino", "3D printing", "Python","IoT","Tkinter"],
    gradientClass: "project-image project-green",
    titleClass: "gradient-title title-green",
    heading: "3D robotic arm project showcasing CAD & GUI controls",
  },
];

export default function Projects() {
  return (
    <section className="sec3" id="projects">
      <div className="tagline" data-aos="fade-up">
        <h1>
          CRAFTED <span>PROJECTS</span>
        </h1>
      </div>

      <div className="projects-container">
        {projects.map((p, i) => (
          <div key={i} className="projects" data-aos="fade-up">
            <div className="projects-effect">
              <div className={p.gradientClass}>
                <h1 className="hide-on-mobile hide">{p.heading}</h1>
                <div className="p-image">
                <img src={p.img} alt={p.alt} loading="lazy"/>
                </div>
                {/* Mobile Content */}
                <div className="mobile-content hide-on-desktop">
                  <div className="mobile-content-1">
                  <h2 className="title">{p.mobileTitle}</h2>
                  <p>{p.mobileDesc}</p>
                  <div className="techstack-used">
                    <ul>{p.tech.map((t, j) => <li key={j}>{t}</li>)}</ul>
                  </div>
                  </div>
                  <div className="view-project">
                  <a href={p.link} target="_blank" rel="noreferrer">
                    {p.view}
                  </a>
                  </div>
                  
                </div>
              </div>
            </div>

            {/* Desktop Content */}
            <div className="project-data hide-on-mobile hide">
              <h2 className={p.titleClass}>{p.title}</h2>
              <span>{p.span}</span>
              {p.details.map((d, j) => (
                <p key={j}>{d}</p>
              ))}
              <p>
                <a href={p.link} target="_blank" rel="noreferrer">
                  {p.title}
                </a>
              </p>
              <div className="techstack-used">
                <ul>{p.tech.map((t, j) => <li key={j}>{t}</li>)}</ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
