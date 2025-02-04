import React from "react";
import "./contactme.css";
export const ContactMe = () => {
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
            <form>
              <div className="row">
                <div className="input-group">
                  <label>Name</label>
                  <input type="text" />
                </div>
                <div className="input-group">
                  <label>Email</label>
                  <input type="email" />
                </div>
              </div>

              <div className="input-group full-width">
                <label>Interested in:</label>
                <select name="interestedin" required>
                  <option value="">Interested In</option>
                  <option value="projects">Projects</option>
                  <option value="connect">Connect</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="input-group full-width">
                <label>Message</label>
                <textarea></textarea>
              </div>

              <button>Submit</button>
            </form>
          </div>
        </div>

        <div className="navigation">
          <a href="/" className="titleContent">
            Home
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
