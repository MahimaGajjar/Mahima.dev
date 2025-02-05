import React from "react";
import "./contactme.css";
import { useState } from "react";

export const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interestedin: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      interestedin: "",
      message: "",
    });
    console.log("Form Data:", formData);
  };
 
  return (
    <>
      <div className="container">
        <div className="heading">
          <h2>Let's Get in Sync!</h2>
          <p>Say Hello and Let's Create Something Great!</p>
        </div>

        <div className="form">
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
                  name="interestedin"
                  value={formData.country}
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

              <button type="submit" >
                Submit
              </button>
            </form>
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
    </>
  );
};

export default ContactMe;
