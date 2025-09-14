import { useState } from "react";
import emailjs from "@emailjs/browser";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your actual IDs from EmailJS dashboard
    const serviceID = "service_y9v3mu2";
    const templateID = "template_37t71tv";
    const publicKey = "iLjhVl32Ie81u2cXp";

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then(
        (result) => {
          console.log(result.text);
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error(error.text);
          setStatus("❌ Failed to send. Please try again.");
        }
      );
  };

  return (
    <section className="contact lazy-load" id="contact">
      <h1>GET IN TOUCH</h1>
      <div className="contact-container">
        
        {/* Left Side - Info */}
        <div className="address" data-aos="fade-up">
          <div className="address-info">
            <span><i className="fa-solid fa-location-dot my-icon"></i></span>
            <h2>location:</h2>
            <p>Visakhapatnam, Andhra Pradesh</p>
          </div>
          <div className="address-info">
            <span><i className="fa-solid fa-phone my-icon"></i></span>
            <h2>contact number:</h2>
            <p>+91 9391177132</p>
          </div>
          <div className="address-info">
            <span><i className="fa-regular fa-envelope my-icon"></i></span>
            <h2>email address:</h2>
            <p>noothannagala7@gmail.com</p>
          </div>
          <div className="address-info">
            <h2>socials:</h2>
            <div className="icons">
              <a href="https://github.com/noothan07" target="_blank" rel="noreferrer"><i className="fa-brands fa-github my-icon1"></i></a>
              <a href="https://www.linkedin.com/in/noothan-nagala-12a1bb383/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin my-icon1"></i></a>
              <a href="https://wa.me/919391177132" target="_blank" rel="noreferrer"><i className="fa-brands fa-whatsapp my-icon1"></i></a>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="contact-form" data-aos="fade-up">
          <form onSubmit={handleSubmit}>
            <div className="form-row two-fields">
              <div className="input-group form-row">
                <label htmlFor="name">FULL NAME</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row input-group">
                <label htmlFor="email">EMAIL ADDRESS</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row input-group">
              <label htmlFor="subject">SUBJECT</label>
              <input
                type="text"
                name="subject"
                placeholder="Your subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row input-group">
              <label htmlFor="message">YOUR MESSAGE</label>
              <textarea
                name="message"
                placeholder="Write your message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="msg-btn">Send Message</button>
          </form>

          {/* Status Message */}
          {status && <p style={{ marginTop: "10px", fontWeight: "bold" }}>{status}</p>}
        </div>
      </div>
    </section>
  );
}
