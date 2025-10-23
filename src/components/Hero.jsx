import profilePic from "../assets/noothan_nagala.webp";
export default function Hero() {
  return (
    <section className="sec2" id="about">
      <div className="hero-section">
        <div className="hero-section-about">
          <div className="aboutme hide-on-mobile">
            <h2 className="aboutme-p"><b>10+ <span>TECH PROJECTS</span></b></h2>
            <p>Hands-on experience delivering real-world softwares and Web Dev.</p>
          </div>

          <div className="mypic" data-aos="fade-up">
            <h1>NOOTHAN</h1>
            <img src={profilePic} alt="mypic" height="510px" width="395px" loading="eager" fetchPriority="high"/>
          </div>

          <div className="aboutme">
            <p>
              Hi, I'm Noothan, an aspiring full stack developer, I can build
              softwares and websites using modern technologies and tools.
            </p>
            <a href="">RESUME</a>
          </div>
        </div>
      </div>
    </section>
  );
}
