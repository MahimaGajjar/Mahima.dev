import React, { useState } from "react";
import "./contactme.css";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactMe = () => {
  const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const userID = process.env.REACT_APP_EMAILJS_USER_ID;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interested_in: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Show loader

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      interested_in: formData.interested_in,
      message: formData.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          toast.success("Email sent successfully!");
          setFormData({ name: "", email: "", interested_in: "", message: "" });
        },
        (error) => {
          console.error("Error sending email:", error);
          toast.error("Error sending email. Please try again.");
        }
      )
      .finally(() => {
        setLoading(false); // Hide loader after response
      });
  };

  return (
    <>
      <div className="background">
        <div className="container">
          <div className="heading">
            <h2>Let's Get in Sync!</h2>
            <p>Say Hello and Let's Create Something Great!</p>
          </div>

          <div className="form">
            <div className="formcard">
              <div className="formcontainer">
                <p>Or Send a message</p>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="input-group">
                      <label>Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="input-group">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="input-group full-width">
                    <label>Interested in:</label>
                    <select
                      name="interested_in"
                      value={formData.interested_in}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Interested In</option>
                      <option value="projects">Projects</option>
                      <option value="connect">Connect</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="input-group full-width">
                    <label>Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button type="submit" disabled={loading}>
                    {loading ? <span className="loader"></span> : "Submit"}
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="navigation">
            <div className="btn">
              <a className="btn__link" href="/">
                <div className="btn__sq"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
