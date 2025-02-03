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
          <p>Or Send a message</p>
          <div className="formcontainer">
            <form>
              <p>Name</p>
              <label>
                <input type="text" />
              </label>
              <label>
                Email
                <input type="email" />
              </label>
              <br></br>
              <label>
                Interested in:
                <select name="interestedin" required>
                  <option value="">Interested In</option>
                  <option value="projects">Projects</option>
                  <option value="connect">Connect</option>
                  <option value="other">Other</option>
                </select>
              </label>
              <br />
              <br />
              <p>Message</p>
              <textarea></textarea>
              <br />
              <br />
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
