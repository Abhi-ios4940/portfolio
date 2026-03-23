// import React, { useState } from "react";

// const Contact = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const res = await fetch("http://localhost:5000/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(form)
//     });

//     if (res.ok) {
//       alert("Message Sent Successfully ✅");
//       setForm({ name: "", email: "", message: "" });
//     } else {
//       alert("Error sending message ❌");
//     }
//   };

//   return (
//     <div className="contact-container">

//       {/* LEFT FORM */}
//       <form className="contact-form" onSubmit={handleSubmit}>
//         <h2>Contact Me</h2>

//         <label>Name</label>
//         <input
//           type="text"
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//           placeholder="Your name"
//           required
//         />

//         <label>Email</label>
//         <input
//           type="email"
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           placeholder="your.email@example.com"
//           required
//         />

//         <label>Message</label>
//         <textarea
//           name="message"
//           value={form.message}
//           onChange={handleChange}
//           placeholder="Your message..."
//           required
//         />

//         <button type="submit">Send Message</button>
//       </form>

//       {/* RIGHT SIDE */}
//       <div className="contact-info">
//         <h2>Contact Information</h2>

//         <p>📧 nafishahaque4@gmail.com</p>
//         <p>📱 +91-8935839718</p>
//         <p>🔗 linkedin.com/in/nafisha-haque</p>
//         <p>💻 github.com/NAFISHAHAQUE</p>
//       </div>

//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  // show popup
  setSuccess(true);

  // clear form
  setForm({ name: "", email: "", message: "" });

  // auto hide popup
  setTimeout(() => setSuccess(false), 3000);
};

  return (
    <div className="contact-page">

      {/* HEADER */}
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <button className="back-btn" onClick={() => navigate(-1)}>
  ← Back
</button>
        <p>
          Have a question or want to work together?<br/> Fill out the form below or reach out directly through my contact information.
        </p>
      </div>

      {/* SUCCESS POPUP */}
      {success && <div className="success-popup">Message Sent ✅</div>}

      {/* MAIN */}
      <div className="contact-container">

        {/* FORM */}
        <form className="contact-card" onSubmit={handleSubmit}>
          <h2>Send Message</h2>

          <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
          <input name="email" value={form.email} onChange={handleChange} placeholder="your.email@example.com" required />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your message..." required />

          <button type="submit">Send Message</button>
        </form>

        {/* INFO */}
        <div className="contact-card info-card">
          <h2>Contact Information</h2>

          <div className="info-item">
  <FaEnvelope />
  <a href="mailto:rabhi4940@gmail.com">rabhi4940@gmail.com</a>
</div>

<div className="info-item">
  <FaPhone />
  <a href="tel:+919680840836">+91-9680840836</a>
</div>

<div className="info-item">
  <FaLinkedin />
  <a href="https://www.linkedin.com/in/abhijeetsinghrathore9" target="_blank">
    linkedin.com/in/abhijeetsinghrathore9
  </a>
</div>

<div className="info-item">
  <FaGithub />
  <a href="https://github.com/AbhijeetSingh-Rathore" target="_blank">
    github.com/AbhijeetSingh-Rathore
  </a>
</div>

          <div className="follow">
            <p>Follow Me</p>
            <div className="socials">
              <FaLinkedin />
              <FaGithub />
            </div>
          </div>
        </div>

      </div>

      {/* FOOTER */}
      <div className="contact-footer">
        Looking forward to hearing from you!
      </div>
    </div>
  );
};

export default Contact;