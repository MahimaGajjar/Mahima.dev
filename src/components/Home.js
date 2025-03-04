import * as React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { useEffect } from "react";
export const HomePage = () => {
  useEffect(() => {
    class TypeWriter {
      constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = "";
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.isDeleting = false;
        this.type();
      }
      type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        this.txt = this.isDeleting
          ? fullTxt.substring(0, this.txt.length - 1)
          : fullTxt.substring(0, this.txt.length + 1);

        // Update element
        this.txtElement.innerHTML = `<span class="txt" style="color:rgb(255, 255, 255);">${this.txt}</span>`;

        let typeSpeed = this.isDeleting ? 50 : 100;

        if (!this.isDeleting && this.txt === fullTxt) {
          typeSpeed = this.wait;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === "") {
          this.isDeleting = false;
          this.wordIndex++;
          typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
      }
    }

    const txtElement = document.querySelector(".txt-type");
    if (txtElement) {
      const words = JSON.parse(txtElement.getAttribute("data-words"));
      const wait = txtElement.getAttribute("data-wait");
      new TypeWriter(txtElement, words, wait);
    }
  }, []);
  
  const handleDownload = () => {
    const resumeUrl = "/MahimaGajjarResume.pdf";

    // Create an anchor element
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "MahimaGajjarResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div className="container home-container">
        <div className="workexperience">
          <Link to="/workexperience" class="link">
            <div className="WEheading-box">
              <h2>Work Experience</h2>
            </div>
            <svg
              id="e68ZndEqcxF1"
              className="svg-container"
              viewBox="0 0 455 512"
              cached="false"
              width="455"
              height="450"
            >
              <g
                id="e68ZndEqcxF2_ts"
                transform="translate(159.889855,223.200948) scale(0,0)"
              >
                <g transform="translate(-150.210518,-169.627434)">
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(85.833089 119.945149)"
                    fill="#207a70"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(85.833089 145.43027)"
                    fill="#3ac6b5"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(112.419299 119.945149)"
                    fill="#2a9d8f"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(139.805379 119.945149)"
                    fill="#3ac6b5"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(112.42487 146.23014)"
                    fill="#3ac6b5"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(139.805379 146.23014)"
                    fill="#64e1d1"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(139.81095 173.315001)"
                    fill="#207a70"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(112.42487 172.515131)"
                    fill="#2a9d8f"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(167.201859 172.515131)"
                    fill="#2a9d8f"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(194.587939 172.515131)"
                    fill="#207a70"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(194.582368 146.23014)"
                    fill="#3ac6b5"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(194.582368 200.109588)"
                    fill="#2a9d8f"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(167.20743 200.109588)"
                    fill="#3ac6b5"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(139.81095 200.109588)"
                    fill="#64e1d1"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(112.430441 200.109588)"
                    fill="#207a70"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(85.83866 199.309718)"
                    fill="#64e1d1"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(167.201859 147.03001)"
                    fill="#207a70"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(167.20743 120.309199)"
                    fill="#64e1d1"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(194.218317 119.945149)"
                    fill="#2a9d8f"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(85.83866 172.515131)"
                    fill="#207a70"
                    stroke="#000"
                  />
                </g>
              </g>
              <g
                id="e68ZndEqcxF23_ts"
                transform="translate(310.593054,223.200948) scale(0,0)"
              >
                <g transform="translate(-150.210518,-169.627434)">
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(85.833089 119.145279)"
                    fill="#2a9d8f"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(85.833089 145.43027)"
                    fill="#2a9d8f"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(112.42487 120.791443)"
                    fill="#207a70"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(139.805379 119.945149)"
                    fill="#2a9d8f"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(112.42487 146.23014)"
                    fill="#3ac6b5"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(139.805379 146.23014)"
                    fill="#2a9d8f"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(139.81095 173.361425)"
                    fill="#207a70"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(112.430441 172.515131)"
                    fill="#2a9d8f"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(167.20743 172.515131)"
                    fill="#3ac6b5"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(195.031233 172.515131)"
                    fill="#3ac6b5"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(194.582368 146.23014)"
                    fill="#64e1d1"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(194.587939 200.109588)"
                    fill="#64e1d1"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(167.20743 200.109588)"
                    fill="#2a9d8f"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(139.81095 200.955882)"
                    fill="#207a70"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(112.430441 200.109588)"
                    fill="#2a9d8f"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(85.83866 199.309718)"
                    fill="#3ac6b5"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(167.201859 147.076434)"
                    fill="#207a70"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(167.20743 121.155493)"
                    fill="#207a70"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(194.223888 119.945149)"
                    fill="#2a9d8f"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(85.83866 172.561555)"
                    fill="#207a70"
                    stroke="#000"
                  />
                </g>
              </g>
              <g
                id="e68ZndEqcxF44_ts"
                transform="translate(311.400408,348.20992) scale(0,0)"
              >
                <g transform="translate(-150.210518,-169.627434)">
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(85.833089 119.145279)"
                    fill="#207a70"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(85.833089 145.43027)"
                    fill="#64e1d1"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(112.42487 119.945149)"
                    fill="#2a9d8f"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(139.805379 119.945149)"
                    fill="#3ac6b5"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(112.42487 146.23014)"
                    fill="#64e1d1"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(139.805379 146.23014)"
                    fill="#2a9d8f"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(139.81095 172.515131)"
                    fill="#64e1d1"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(112.430441 172.515131)"
                    fill="#3ac6b5"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(167.20743 172.515131)"
                    fill="#64e1d1"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(194.587939 172.515131)"
                    fill="#2a9d8f"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(194.582368 146.23014)"
                    fill="#64e1d1"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(194.587939 200.109588)"
                    fill="#64e1d1"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(167.20743 200.109588)"
                    fill="#2a9d8f"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(139.81095 200.109588)"
                    fill="#207a70"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(112.430441 200.109588)"
                    fill="#3ac6b5"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(85.83866 199.309718)"
                    fill="#207a70"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(167.201859 146.23014)"
                    fill="#3ac6b5"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(167.20743 120.309199)"
                    fill="#207a70"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(194.223888 119.945149)"
                    fill="#3ac6b5"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(85.83866 171.715261)"
                    fill="#2a9d8f"
                    stroke="#000"
                  />
                </g>
              </g>
              <g
                id="e68ZndEqcxF65_ts"
                transform="translate(160.333152,347.410049) scale(0,0)"
              >
                <g transform="translate(-150.210518,-169.627434)">
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(85.833089 119.145279)"
                    fill="#207a70"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(85.833089 145.43027)"
                    fill="#2a9d8f"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(112.42487 119.945149)"
                    fill="#2a9d8f"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(139.805379 119.945149)"
                    fill="#207a70"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(112.42487 146.23014)"
                    fill="#3ac6b5"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(139.805379 146.23014)"
                    fill="#2a9d8f"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(139.81095 172.515131)"
                    fill="#64e1d1"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(112.430441 172.515131)"
                    fill="#207a70"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(167.20743 172.515131)"
                    fill="#64e1d1"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(194.587939 172.515131)"
                    fill="#3ac6b5"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(194.582368 146.23014)"
                    fill="#207a70"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(194.587939 200.109588)"
                    fill="#2a9d8f"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(167.20743 200.109588)"
                    fill="#3ac6b5"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(139.81095 200.109588)"
                    fill="#207a70"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(112.430441 200.109588)"
                    fill="#2a9d8f"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(85.83866 199.309718)"
                    fill="#64e1d1"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(167.201859 146.23014)"
                    fill="#3ac6b5"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(167.20743 120.309199)"
                    fill="#3ac6b5"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(194.223888 119.945149)"
                    fill="#2a9d8f"
                    stroke="#000"
                  />
                  <rect
                    width="20"
                    height="20"
                    rx="0"
                    ry="0"
                    transform="translate(85.83866 171.715261)"
                    fill="#3ac6b5"
                    stroke="#000"
                  />
                </g>
              </g>
              <g
                id="e68ZndEqcxF86"
                transform="translate(8.36678 48.86324)"
                opacity="0"
              >
                <g
                  id="e68ZndEqcxF87_tr"
                  transform="translate(341.648742,398.036917) rotate(360)"
                >
                  <polygon
                    points="34.5,10.52 38.691358,27.458014 54.549383,20.174174 43.91358,34.01347 59.5,41.865203 42.049383,42.180013 45.623457,59.26 34.5,45.81576 23.376543,59.26 26.950617,42.180013 9.5,41.865203 25.08642,34.01347 14.450617,20.174174 30.308642,27.458014 34.5,10.52"
                    transform="translate(-35.204326,-37.057694)"
                    fill="#e9c46a"
                    stroke="#000"
                  />
                </g>
                <g
                  id="e68ZndEqcxF88_tr"
                  transform="translate(87.145649,222.715121) rotate(0)"
                >
                  <polygon
                    id="e68ZndEqcxF88"
                    points="29.5,10.52 32.853086,24.069716 45.539506,18.242943 37.030864,29.313812 49.5,35.594876 35.539506,35.846711 38.398766,49.51 29.5,38.75516 20.601234,49.51 23.460494,35.846711 9.5,35.594876 21.969136,29.313812 13.460494,18.242943 26.146914,24.069716 29.5,10.52"
                    transform="translate(-29.5,-30.015)"
                    fill="#fada90"
                    stroke="#000"
                  />
                </g>
                <path
                  id="e68ZndEqcxF89"
                  d="M43.5,48.5c-7.269841,5.777778-9.611111,10.460318-12.5,25-2.888889-14.539682-5.230159-19.222222-12.5-25c7.269841-5.777777,9.611111-10.460317,12.5-25c2.888889,14.539683,5.230159,19.222223,12.5,25Z"
                  transform="translate(75.686295 357.451792)"
                  fill="#94d1ee"
                  stroke="#000"
                />
                <g
                  id="e68ZndEqcxF90_tr"
                  transform="translate(45.433396,314.439505) rotate(0)"
                >
                  <path
                    id="e68ZndEqcxF90"
                    d="M35.47,10.52L39.823982,26.158298L56.297299,19.433374L45.248827,32.210729L61.44,39.45997L43.312299,39.750623L47.025048,55.52L35.47,43.107387L23.914952,55.52L27.627701,39.750623L9.5,39.45997L25.691173,32.210729L14.642701,19.433374L31.116018,26.158298L35.47,10.52Z"
                    transform="translate(-35.47,-33.02)"
                    fill="#e76f51"
                    stroke="#000"
                  />
                </g>
                <g
                  id="e68ZndEqcxF91_tr"
                  transform="translate(402.534766,222.715121) rotate(-8.485073)"
                >
                  <polygon
                    points="29.5,10.52 32.853086,24.069716 45.539506,18.242943 37.030864,29.313812 49.5,35.594876 35.539506,35.846711 38.398766,49.51 29.5,38.75516 20.601234,49.51 23.460494,35.846711 9.5,35.594876 21.969136,29.313812 13.460494,18.242943 26.146914,24.069716 29.5,10.52"
                    transform="translate(-29.5,-30.015)"
                    fill="#fada90"
                    stroke="#000"
                  />
                </g>
                <path
                  id="e68ZndEqcxF92"
                  d="M38.5,43.5c-5.815873,4.622222-7.688889,8.368254-10,20-2.311111-11.631746-4.184127-15.377778-10-20c5.815873-4.622222,7.688889-8.368254,10-20c2.311111,11.631746,4.184127,15.377778,10,20Z"
                  transform="matrix(.983914 0.178642-.178642 0.983914 372.251049 310.482758)"
                  fill="#94d1ee"
                  stroke="#000"
                />
                <path
                  id="e68ZndEqcxF93"
                  d="M38.5,43.5c-5.815873,4.622222-7.688889,8.368254-10,20-2.311111-11.631746-4.184127-15.377778-10-20c5.815873-4.622222,7.688889-8.368254,10-20c2.311111,11.631746,4.184127,15.377778,10,20Z"
                  transform="translate(36.640082 77.298643)"
                  fill="#94d1ee"
                  stroke="#000"
                />
                <path
                  id="e68ZndEqcxF94"
                  d="M43.5,48.5c-7.269841,5.777778-9.611111,10.460318-12.5,25-2.888889-14.539682-5.230159-19.222222-12.5-25c7.269841-5.777777,9.611111-10.460317,12.5-25c2.888889,14.539683,5.230159,19.222223,12.5,25Z"
                  transform="translate(157.963284 71.519473)"
                  fill="#94d1ee"
                  stroke="#000"
                />
                <path
                  id="e68ZndEqcxF95"
                  d="M43.5,48.5c-7.269841,5.777778-9.611111,10.460318-12.5,25-2.888889-14.539682-5.230159-19.222222-12.5-25c7.269841-5.777777,9.611111-10.460317,12.5-25c2.888889,14.539683,5.230159,19.222223,12.5,25Z"
                  transform="matrix(.967608-.252457 0.252457 0.967608 203.666518 310.477444)"
                  fill="#94d1ee"
                  stroke="#000"
                />
                <path
                  id="e68ZndEqcxF96"
                  d="M26,14L28.869231,22.069231L36.607692,18.392308L32.930769,26.130769L41,29L32.930769,31.869231L36.607692,39.607692L28.869231,35.930769L26,44L23.130769,35.930769L15.392308,39.607692L19.069231,31.869231L11,29L19.069231,26.130769L15.392308,18.392308L23.130769,22.069231L26,14Z"
                  transform="matrix(.984611 0.174761-.174761 0.984611 304.161163 67.30272)"
                  fill="#e76f51"
                  stroke="#000"
                />
                <path
                  id="e68ZndEqcxF97"
                  d="M26,14L28.869231,22.069231L36.607692,18.392308L32.930769,26.130769L41,29L32.930769,31.869231L36.607692,39.607692L28.869231,35.930769L26,44L23.130769,35.930769L15.392308,39.607692L19.069231,31.869231L11,29L19.069231,26.130769L15.392308,18.392308L23.130769,22.069231L26,14Z"
                  transform="translate(108.186295 396.816449)"
                  fill="#faaf66"
                  stroke="#000"
                />
                <g
                  id="e68ZndEqcxF98_tr"
                  transform="translate(109.186295,93.628666) rotate(0)"
                >
                  <polygon
                    points="26,14 28.869231,22.069231 36.607692,18.392308 32.930769,26.130769 41,29 32.930769,31.869231 36.607692,39.607692 28.869231,35.930769 26,44 23.130769,35.930769 15.392308,39.607692 19.069231,31.869231 11,29 19.069231,26.130769 15.392308,18.392308 23.130769,22.069231 26,14"
                    transform="translate(-26,-29.614881)"
                    fill="#fada90"
                    stroke="#000"
                  />
                </g>
                <circle
                  id="e68ZndEqcxF99"
                  r="5"
                  transform="translate(382.534766 164.340673)"
                  fill="#fff"
                  stroke="#000"
                />
                <circle
                  r="4"
                  transform="translate(135.566804 384.951792)"
                  fill="#94d1ee"
                  stroke="#000"
                />
                <circle
                  r="5"
                  transform="translate(320.03054 435.816449)"
                  fill="#fff"
                  stroke="#000"
                />
                <circle
                  r="5"
                  transform="translate(377.534766 385.951792)"
                  fill="#94d1ee"
                  stroke="#000"
                />
                <circle
                  r="2.5"
                  transform="translate(370.034766 428.316449)"
                  fill="#fff"
                  stroke="#000"
                />
                <circle
                  id="e68ZndEqcxF104"
                  r="5"
                  transform="translate(60.140082 358.229092)"
                  fill="#fff"
                  stroke="#000"
                />
                <circle
                  r="7.5"
                  transform="translate(299.321135 93.013785)"
                  fill="#94d1ee"
                  stroke="#000"
                />
                <circle
                  id="e68ZndEqcxF106"
                  r="7.5"
                  transform="translate(238.59892 237.44777)"
                  fill="#fada90"
                  stroke="#000"
                />
                <circle
                  r="4"
                  transform="translate(71.640082 72.013785)"
                  fill="#fff"
                  stroke="#000"
                />
              </g>
            </svg>
          </Link>
        </div>
        <div className="projects">
          <a href="/projects" class="link">
            <div className="Projectheading-box">
              <h2>Projects</h2>
            </div>
            <svg
              id="ewEtQUf14pr1"
              className="projectsvg-container"
              viewBox="0 0 455 256"
              cached="false"
              width="500"
              height="220"
            >
              <g transform="translate(57.250088 32.050721)">
                <g clip-path="url(#ewEtQUf14pr6)">
                  <g>
                    <path
                      d="M418.89954,133.40093h30.002001v162.097356h-30.002001v-162.097356Zm0,0"
                      transform="matrix(.929756 0 0 0.929756-86.1774-89.6748)"
                      fill="none"
                      stroke="#000"
                      stroke-miterlimit="10"
                    />
                  </g>
                  <clipPath id="ewEtQUf14pr6" />
                </g>
                <rect
                  width="322.07"
                  height="150.71"
                  rx="0"
                  ry="0"
                  transform="translate(9.215 34.35601)"
                  fill="#94d1ee" //background
                  stroke="#000"
                />
                <path
                  d="M302,33h27v152.769531h-27L302,33Zm0,0"
                  transform="translate(2.164062-1.086783)"
                  fill="#f4a261" //background of scroll bar
                  stroke="#000"
                />
                <path
                  d="M418.89954,133.40093h20.983935v19.363896h-20.983935v-19.363896Zm0,0"
                  transform="matrix(.935001 0 0 0.929565-84.190383-85.930568)"
                  fill="#94d1ee" // up arrow
                  stroke="#000"
                  stroke-miterlimit="10"
                />
                <path
                  d="M418.89954,133.40093h20.983935v19.363896h-20.983935v-19.363896Zm0,0"
                  transform="matrix(.935001 0 0 0.929565-83.673098 40.143693)"
                  fill="#94d1ee" //down arrow
                  stroke="#000"
                  stroke-miterlimit="10"
                />
                <g clip-path="url(#ewEtQUf14pr14)">
                  <g>
                    <path
                      d="M9.214844,6.832031h322.066406v27.523438h-322.066406v-27.523438Zm0,0"
                      fill="#264653" //NAvbar
                      stroke="#000"
                    />
                  </g>
                  <clipPath id="ewEtQUf14pr14">
                    <path d="M9,6.164062h323L332,35L9,35L9,6.164062Zm0,0" />
                  </clipPath>
                </g>
                <g clip-path="url(#ewEtQUf14pr19)">
                  <g>
                    <path
                      d="M102.599206,103.798059h346.398967v29.602871h-346.398967v-29.602871Zm0,0"
                      transform="matrix(.929756 0 0 0.929756-86.1774-89.6748)"
                      fill="none"
                      stroke="#000"
                      stroke-miterlimit="10"
                    />
                  </g>
                  <clipPath id="ewEtQUf14pr19">
                    <path d="M8.75,6.164062h323.25L332,35L8.75,35v-28.835938Zm0,0" />
                  </clipPath>
                </g>
                <path
                  d="M422.701782,107.999431h21.200126v21.200126h-21.200126v-21.200126Zm0,0"
                  transform="matrix(.929756 0 0 0.929756-86.1774-89.6748)"
                  fill="#94d1ee" //cross icon
                  stroke="#000"
                  stroke-miterlimit="10"
                />
                <path
                  d="M394.598801,107.999431h21.200126v21.200126h-21.200126v-21.200126Zm0,0"
                  transform="matrix(.929756 0 0 0.929756-86.1774-89.6748)"
                  fill="#94d1ee" //square icon
                  stroke="#000"
                  stroke-miterlimit="10"
                />
                <path
                  d="M398.601763,111.998316h13.196511v13.200713h-13.196511v-13.200713Zm0,0"
                  transform="matrix(0-.929756 0.929756 0 180.306 397.399)"
                  fill="#94d1ee" //square icon
                  stroke="#000"
                  stroke-miterlimit="10"
                />
                <path
                  d="M366.600854,107.999431h21.200126v21.200126h-21.200126v-21.200126Zm0,0"
                  transform="matrix(.929756 0 0 0.929756-86.1774-89.6748)"
                  fill="#94d1ee" //- icon
                  stroke="#000"
                  stroke-miterlimit="10"
                />
                <path
                  d="M322.5625,14.070312l.65625.65625-12.359375,12.359376-.65625-.65625L322.5625,14.070312Zm0,0"
                  transform="translate(.000001 0.456772)"
                />
                <path d="M310.164062,14.773438l.65625-.660157l12.359376,12.359375-.65625.660156-12.359376-12.359374Zm0,0" />
                <path
                  d="M270.355469,20.191406v.85h-13v-.85h13Zm0,0"
                  transform="translate(.671947-.402344)"
                  stroke="#000"
                />
                <path
                  d="M315.962231,38.074219l-7.458325,12.273437h15l-7.541675-12.273437Zm0,0"
                  transform="translate(1.240234 2.86333)"
                />
                <path
                  d="M315.962231,180.792969l7.541675-12.273438h-15l7.458325,12.273438Zm0,0"
                  transform="translate(1.660156-1.507722)"
                />
                <g
                  id="ewEtQUf14pr30_to"
                  transform="translate(-85.659565,-89.6748)"
                >
                  <path
                    d="M423.39921,164.49949v63.600378h21.099293v-63.600378h-21.099293Zm0,0"
                    transform="scale(0.929756,0.929756) translate(0,0)"
                    fill="#94d1ee" //Scroller sidebar
                    stroke="#000"
                    stroke-miterlimit="10"
                  />
                </g>
                <g
                  id="ewEtQUf14pr31_tr"
                  transform="translate(23.292969,20.369141) rotate(0)"
                >
                  <g transform="translate(-23.292969,-20.36914)">
                    <g clip-path="url(#ewEtQUf14pr35)">
                      <g>
                        <path
                          d="M23.292969,28.609375c-.542969,0-1.078125-.054687-1.609375-.160156-.527344-.105469-1.042969-.261719-1.542969-.46875s-.976563-.460938-1.425781-.761719-.867188-.640625-1.246094-1.023438c-.382812-.382812-.726562-.800781-1.027344-1.25s-.554687-.925781-.761718-1.421874c-.207032-.5-.363282-1.015626-.46875-1.546876s-.15625-1.066406-.15625-1.609374c0-.539063.050781-1.074219.15625-1.605469s.261718-1.046875.46875-1.546875.460937-.972656.761718-1.421875c.300782-.453125.644532-.867188,1.027344-1.25.378906-.382813.796875-.722657,1.246094-1.023438s.925781-.554687,1.425781-.761719s1.015625-.363281,1.542969-.46875c.53125-.105468,1.066406-.160156,1.609375-.160156.539062,0,1.078125.054688,1.605469.160156.53125.105469,1.046874.261719,1.546874.46875s.976563.460938,1.425782.761719.863281.640625,1.246094,1.023438.726562.796875,1.027343,1.25c.300781.449219.554688.921875.761719,1.421875s.363281,1.015625.46875,1.546875.15625,1.066406.15625,1.605469c0,.867187-.132812,1.707031-.398438,2.53125-.03125.097656-.089843.167968-.179687.214843s-.183594.058594-.28125.027344c-.09375-.03125-.167969-.089844-.214844-.179687s-.054687-.183594-.027343-.28125c.164062-.503907.273437-1.015626.324218-1.542969.054688-.523438.054688-1.050781-.003906-1.574219-.054688-.527344-.164062-1.039062-.332031-1.542969-.164063-.503906-.378907-.980469-.644531-1.4375s-.574219-.882812-.929688-1.273437-.746094-.742188-1.175781-1.050782c-.425781-.308593-.882813-.570312-1.367188-.785156s-.984375-.375-1.5-.484375c-.519531-.105469-1.039062-.160156-1.570312-.15625-.527344,0-1.050781.058594-1.566407.167969-.515624.113281-1.015624.277344-1.496093.492188-.484375.21875-.9375.480468-1.363281.792968s-.816407.667969-1.167969,1.058594c-.351563.394531-.660157.820312-.921875,1.28125-.261719.457031-.476563.9375-.636719,1.441406s-.269531,1.019532-.320313,1.542969c-.054687.527344-.050781,1.054687.003907,1.578125.058593.523438.167969,1.039062.335937,1.539062.164063.503907.378906.984376.648438,1.4375.265625.457032.574218.882813.929687,1.273438s.75.742188,1.175781,1.050781c.429688.308594.886719.566407,1.371094.78125.484375.210938.984375.371094,1.5.480469.519532.105469,1.042969.160156,1.570313.15625.359375,0,.71875-.027344,1.078125-.078125.097656-.011719.183594.011719.257812.066406.078125.058594.125.136719.140625.230469.011719.09375-.011719.179688-.070312.257812s-.132813.125-.230469.140626c-.390625.054687-.78125.085937-1.175781.085937Zm0,0"
                          fill="#231f20" //globe
                        />
                      </g>
                      <clipPath id="ewEtQUf14pr35">
                        <path
                          d="M15.027344,12.101562h16.460937v16.464844h-16.460937v-16.464844Zm0,0"
                          transform="translate(.000001 0)"
                        />
                      </clipPath>
                    </g>
                    <g clip-path="url(#ewEtQUf14pr40)">
                      <g>
                        <path
                          d="M23.292969,28.609375c-.097657,0-.179688-.035156-.246094-.105469-.070313-.066406-.105469-.148437-.105469-.246094v-15.777343c0-.097657.035156-.179688.105469-.25.066406-.066407.148437-.101563.246094-.101563s.179687.035156.246093.101563c.070313.070312.105469.152343.105469.25v15.777343c0,.097657-.035156.179688-.105469.246094-.066406.070313-.148437.105469-.246093.105469Zm0,0"
                          fill="#231f20" //globe
                        />
                      </g>
                      <clipPath id="ewEtQUf14pr40">
                        <path d="M22,12.101562h2v16.464844h-2v-16.464844Zm0,0" />
                      </clipPath>
                    </g>
                    <g clip-path="url(#ewEtQUf14pr45)">
                      <g>
                        <path
                          d="M31.179688,20.71875h-15.777344c-.09375,0-.175782-.035156-.246094-.101562-.066406-.070313-.101562-.152344-.101562-.25c0-.09375.035156-.179688.101562-.246094.070312-.070313.152344-.101563.246094-.101563h15.777344c.097656,0,.179687.03125.25.101563.066406.066406.101562.152344.101562.246094c0,.097656-.035156.179687-.101562.25-.070313.066406-.152344.101562-.25.101562Zm0,0"
                          fill="#231f20" //globe
                        />
                      </g>
                      <clipPath id="ewEtQUf14pr45">
                        <path
                          d="M15.027344,20h16.460937v1h-16.460937v-1Zm0,0"
                          transform="translate(.000001 0)"
                        />
                      </clipPath>
                    </g>
                    <g clip-path="url(#ewEtQUf14pr50)">
                      <g>
                        <path
                          d="M23.292969,28.609375c-.542969,0-1.078125-.054687-1.609375-.160156-.527344-.105469-1.042969-.261719-1.542969-.46875s-.976563-.460938-1.425781-.761719-.867188-.640625-1.246094-1.023438c-.382812-.382812-.726562-.800781-1.027344-1.25s-.554687-.925781-.761718-1.421874c-.207032-.5-.363282-1.015626-.46875-1.546876s-.15625-1.066406-.15625-1.609374c0-.539063.050781-1.074219.15625-1.605469s.261718-1.046875.46875-1.546875.460937-.972656.761718-1.421875c.300782-.453125.644532-.867188,1.027344-1.25.378906-.382813.796875-.722657,1.246094-1.023438s.925781-.554687,1.425781-.761719s1.015625-.363281,1.542969-.46875c.53125-.105468,1.066406-.160156,1.609375-.160156.539062,0,1.078125.054688,1.605469.160156.53125.105469,1.046874.261719,1.546874.46875s.976563.460938,1.425782.761719.863281.640625,1.246094,1.023438.726562.796875,1.027343,1.25c.300781.449219.554688.921875.761719,1.421875s.363281,1.015625.46875,1.546875.15625,1.066406.15625,1.605469c0,.542968-.054688,1.078124-.160156,1.609374-.105469.527344-.261719,1.042969-.46875,1.542969-.210938.5-.464844.972657-.761719,1.421875-.300781.449219-.644531.867188-1.027344,1.25s-.796875.722656-1.246093,1.023438-.925782.554687-1.425782.761718c-.496094.207032-1.011718.363282-1.542968.46875-.53125.109376-1.066407.160157-1.605469.164063Zm0-15.777344c-.496094,0-.984375.046875-1.472657.144531-.484374.09375-.957031.238282-1.414062.425782-.457031.191406-.890625.421875-1.300781.699218-.414063.273438-.792969.585938-1.144531.9375-.347657.347657-.660157.730469-.9375,1.140626-.273438.414062-.507813.847656-.695313,1.304687s-.332031.929687-.429687,1.414063-.144532.976562-.144532,1.46875c0,.496093.046875.988281.144532,1.472656s.242187.957031.429687,1.414062.421875.890625.695313,1.304688c.277343.410156.589843.789062.9375,1.140625.351562.351562.730468.664062,1.144531.9375.410156.273437.84375.507812,1.300781.695312.457031.191407.929688.332031,1.414062.429688.488282.097656.976563.144531,1.472657.144531s.984375-.046875,1.46875-.144531c.488281-.097657.957031-.238281,1.414062-.429688.457031-.1875.894531-.421875,1.304688-.695312s.792969-.585938,1.140625-.9375c.351562-.351563.664062-.730469.9375-1.140625.277344-.414063.507812-.847656.699218-1.304688.1875-.457031.332032-.929687.429688-1.414062.09375-.484375.144531-.976563.144531-1.472656-.003906-.492188-.050781-.984376-.148437-1.46875s-.242188-.957032-.429688-1.414063c-.191406-.457031-.421875-.890625-.699218-1.300781-.273438-.410156-.585938-.792969-.9375-1.140625-.347657-.351563-.730469-.664063-1.140626-.9375-.410156-.277344-.84375-.507813-1.300781-.699219-.457031-.1875-.929687-.332031-1.414062-.429688s-.972657-.144531-1.46875-.144531Zm0,0"
                          fill="#231f20" //globe
                        />
                      </g>
                      <clipPath id="ewEtQUf14pr50">
                        <path
                          d="M15.027344,12.101562h16.460937v16.464844h-16.460937v-16.464844Zm0,0"
                          transform="translate(.000001 0)"
                        />
                      </clipPath>
                    </g>
                    <path
                      d="M17.21875,25.488281c-.148438.003907-.253906-.0625-.316406-.195312-.039063-.085938-.042969-.175781-.011719-.265625.03125-.09375.089844-.160156.171875-.203125.976562-.515625,2-.902344,3.070312-1.167969s2.160157-.398438,3.261719-.398438s2.1875.132813,3.261719.398438c1.070312.265625,2.09375.652344,3.066406,1.167969.089844.042969.148438.109375.179688.203125.03125.089844.023437.179687-.015625.265625-.042969.085937-.109375.148437-.203125.179687-.089844.03125-.179688.023438-.269532-.019531-.925781-.488281-1.898437-.859375-2.917968-1.113281-1.019532-.25-2.050782-.375-3.101563-.375s-2.082031.125-3.101562.375c-1.019531.253906-1.992188.625-2.921875,1.113281-.046875.023437-.097656.035156-.152344.035156Zm0,0"
                      fill="#231f20" //globe
                    />
                    <g clip-path="url(#ewEtQUf14pr56)">
                      <g>
                        <path
                          d="M25.554688,28.207031c-.054688.003907-.105469-.007812-.152344-.035156-.089844-.039063-.148438-.109375-.175782-.199219-.03125-.09375-.023437-.183594.019532-.269531c2.363281-4.652344,2.363281-9.582031,0-14.667969-.042969-.085937-.050782-.171875-.019532-.261718.027344-.09375.082032-.160157.167969-.203126s.179688-.046874.269531-.011718c.09375.03125.160157.09375.199219.179687c2.460938,5.289063,2.460938,10.433594,0,15.28125-.0625.125-.167969.1875-.308593.1875Zm0,0"
                          fill="#231f20" //globe
                        />
                      </g>
                      <clipPath id="ewEtQUf14pr56">
                        <path d="M25,12.101562h3v16.464844h-3v-16.464844Zm0,0" />
                      </clipPath>
                    </g>
                    <g clip-path="url(#ewEtQUf14pr61)">
                      <g>
                        <path
                          d="M21.03125,28.207031c-.144531.003907-.25-.058593-.316406-.1875C18.25,23.171875,18.25,18.027344,20.707031,12.738281c.042969-.089843.109375-.15625.207031-.1875.09375-.035156.1875-.027343.277344.019531.085938.039063.148438.105469.179688.195313.035156.09375.03125.179687-.011719.269531-2.367187,5.085938-2.367187,10.015625,0,14.667969.046875.085937.050781.175781.023437.269531-.03125.089844-.089843.160156-.179687.199219-.054687.03125-.113281.042969-.171875.035156Zm0,0"
                          fill="#231f20" //globe
                        />
                      </g>
                      <clipPath id="ewEtQUf14pr61">
                        <path d="M18,12.101562h4v16.464844h-4v-16.464844Zm0,0" />
                      </clipPath>
                    </g>
                    <path
                      d="M23.390625,17.566406c-2.226563-.023437-4.328125-.546875-6.304687-1.570312-.085938-.042969-.148438-.109375-.179688-.199219-.03125-.09375-.023438-.183594.019531-.269531s.113281-.140625.203125-.171875c.089844-.027344.179688-.023438.265625.019531.925781.488281,1.898438.859375,2.917969,1.113281c1.019531.25,2.054688.378907,3.101562.378907c1.050782,0,2.085938-.128907,3.101563-.378907c1.019531-.253906,1.992187-.625,2.921875-1.113281.085938-.042969.175781-.046875.265625-.019531.089844.03125.15625.085937.203125.171875.042969.085937.046875.175781.015625.269531-.03125.089844-.089844.15625-.175781.199219-1.992188,1.03125-4.113282,1.554687-6.355469,1.570312Zm0,0"
                      fill="#231f20" //black globe
                    />
                  </g>
                </g>
              </g>
              <rect
                id="ewEtQUf14pr64"
                width="60"
                height="0"
                rx="0"
                ry="0"
                transform="translate(76.212771 75.110196)"
                fill="#fcbf49" //Profile photo
                stroke="#000"
              />
              <rect
                id="ewEtQUf14pr65"
                width="0"
                height="10"
                rx="0"
                ry="0"
                transform="translate(142.382948 75.261707)"
                fill="#0ead69" // 1nd line
                stroke="#000"
              />
              <rect
                id="ewEtQUf14pr66"
                width="0"
                height="10"
                rx="0"
                ry="0"
                transform="translate(142.382948 100.110196)"
                fill="#0ead69" // 2nd line
                stroke="#000"
              />
              <rect
                id="ewEtQUf14pr67"
                width="0"
                height="10"
                rx="0"
                ry="0"
                transform="translate(142.382948 125.082024)"
                fill="#0ead69" // 3nd line
                stroke="#000"
              />
              <rect
                id="ewEtQUf14pr68"
                width="270"
                height="0"
                rx="0"
                ry="0"
                transform="translate(77.382948 145.148528)"
                fill="#f4a261" //rectangle tab
                stroke="#000"
              />
              <g
                id="ewEtQUf14pr69_to"
                style={{
                  offsetPath:
                    "path('M81.698795,100.07005Q163.994974,54.715908,172.616601,102.905154C181.238228,151.0944,138.913879,155.173859,165.562543,183.229554C192.211207,211.285249,239.238262,188.7693,267.454495,159.202883C295.670728,129.636466,347.793523,145.607908,347.808675,168.337652')",
                  offsetRotate: "0deg",
                }}
              >
                <path
                  d="M37.641889,35.240104l2.795265,6.580615L37.449242,43.09l-2.791488-6.584393-4.449761,6.131079L30.14,21.72l15,14.577838Z"
                  transform="translate(-37.639999,-32.404997) scale(0.5)"
                  fill="#fff"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </a>
        </div>
        <div className="education">
          <a href="/education" class="link">
            <div className="educationheading-box">
              <h2>Education</h2>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="education-svg"
              id="eUbxc2KBHAG1"
              viewBox="0 0 455 256"
              cached="false"
              width="500"
              height="200"
              // xmlns:bx="https://boxy-svg.com"
            >
              <defs>
                <radialGradient
                  gradientUnits="userSpaceOnUse"
                  cx={72.648}
                  cy={110.337}
                  r={40}
                  id="gradient-3"
                  spreadMethod="pad"
                >
                  <stop
                    offset={0}
                    style={{
                      stopColor: "rgb(0% 0% 0%)",
                    }}
                  />
                  <stop
                    offset={1}
                    style={{
                      stopColor: "rgb(0% 0% 0%)",
                    }}
                  />
                </radialGradient>
                <radialGradient
                  gradientUnits="userSpaceOnUse"
                  cx={52.648}
                  cy={102.587}
                  r={20}
                  id="gradient-4"
                  spreadMethod="pad"
                >
                  <stop
                    offset={0}
                    style={{
                      stopColor: "rgb(0% 0% 0%)",
                    }}
                  />
                  <stop
                    offset={1}
                    style={{
                      stopColor: "rgb(0% 0% 0%)",
                    }}
                  />
                </radialGradient>
                <radialGradient
                  gradientUnits="userSpaceOnUse"
                  cx={118.171}
                  cy={191.99}
                  r={50.011}
                  id="gradient-5"
                  spreadMethod="pad"
                >
                  <stop
                    offset={0}
                    style={{
                      stopColor: "rgb(0% 0% 0%)",
                    }}
                  />
                  <stop
                    offset={1}
                    style={{
                      stopColor: "rgb(0% 0% 0%)",
                    }}
                  />
                </radialGradient>
                <radialGradient
                  gradientUnits="userSpaceOnUse"
                  cx={0}
                  cy={0}
                  r={17.5}
                  id="gradient-1"
                >
                  <stop
                    offset={0}
                    style={{
                      stopColor: "rgb(0% 0% 0%)",
                    }}
                  />
                  <stop
                    offset={1}
                    style={{
                      stopColor: "rgb(0% 0% 0%)",
                    }}
                  />
                </radialGradient>
              </defs>
              <path
                d="M 106.872 224.651 C 106.111 197.596 96.226 175.916 83.728 173.89 C 71.228 171.865 59.959 190.118 57.343 216.626 C 52.428 212.754 46.931 214.894 42.949 222.229 C 38.967 229.563 37.116 240.96 38.102 252.068 C 38.285 254.004 39.076 255.39 39.989 255.375 L 118.377 255.375 C 118.905 255.377 119.409 254.911 119.773 254.084 C 120.137 253.256 120.327 252.142 120.299 251.002 C 120.085 242.532 118.279 224.651 106.872 224.651 Z"
                stroke="#000"
                style={{
                  fill: "rgb(45, 158, 9)",
                }}
              />
              <g
                transform="matrix(0.418135, 0, 0, 0.360851, 60.989831, 163.950091)"
                style={{}}
              >
                <rect
                  width={80}
                  height={80}
                  fill="#e9c46a"
                  stroke="#000"
                  ry={0}
                  rx={0}
                  transform="translate(97.5 176)"
                />
                <rect
                  width={50}
                  height={46}
                  rx={0}
                  ry={0}
                  transform="translate(111.219823 187)"
                  fill="#98d5f4"
                  stroke="#000"
                />
                <line
                  x1={0}
                  y1={-23}
                  x2={0}
                  y2={23}
                  transform="translate(136.219823 210)"
                  fill="none"
                  stroke="#000"
                />
                <line
                  x1={-25}
                  y1={0}
                  x2={25}
                  y2={0}
                  transform="translate(137.5 210)"
                  fill="none"
                  stroke="#000"
                />
              </g>
              <ellipse
                rx={17.5}
                ry={17.5}
                transform="translate(234.347826 46.619825)"
                style={{
                  stroke: "url(&quot",
                  fillRule: "evenodd",
                  paintOrder: "fill",
                  fill: "rgb(245, 182, 0)",
                }}
              />
              <g transform="translate(-442.012952-75.039706)">
                <g
                  id="eUbxc2KBHAG10_to"
                  transform="translate(562.451659,9.317477)"
                >
                  <path
                    d="M99.110816,112.531384c-1.408505.001042-2.808325.220589-4.149535.650809-3.644714-11.178819-14.200149-18.634402-25.952905-18.331221s-21.909848,8.293076-24.97349,19.644949c-.463019-.068658-.930247-.10507-1.398312-.108973-5.193729,0-9.833582,4.192425-9.987941,10.152631-.010611.33756.115455.665115.349634.908439s.556641.381818.894319.384099h77.512478c.359322-.002019.700397-.158591.936195-.429762s.343509-.630714.295651-.986884c-.882233-6.797862-6.672053-11.884824-13.526094-11.884087Z"
                    transform="translate(0,0)"
                    fill="#fff"
                    style={{
                      stroke: "url(&quot",
                      paintOrder: "fill markers",
                    }}
                  />
                </g>
                <g
                  id="eUbxc2KBHAG11_to"
                  transform="translate(778.945551,21.607485)"
                >
                  <path
                    d="M65.879427,103.683892c-.704252.000521-1.404162.110259-2.074767.3253-1.822357-5.587604-7.100075-9.31419-12.976454-9.162649s-10.954924,4.145198-12.486745,9.819301c-.23151-.034318-.465124-.052518-.699157-.054469-2.596864,0-4.916791,2.095535-4.99397,5.074675-.005306.168725.057727.33245.174817.454073s.27832.190847.447159.191987h38.756242c.179661-.001009.350198-.07927.468097-.214812s.171755-.315255.147826-.493282c-.441117-3.397833-3.336027-5.940492-6.763048-5.940124Z"
                    transform="translate(0,0)"
                    fill="#fff"
                    style={{
                      stroke: "url(&quot",
                      paintOrder: "fill markers",
                    }}
                  />
                </g>
                <g
                  id="eUbxc2KBHAG12_to"
                  transform="translate(589.954996,-52.830984)"
                >
                  <path
                    d="M143.283934,194.703115c-6.460432-17.639128-24.643369-28.102589-43.139981-24.825114s-31.977429,19.351536-31.983953,38.136565c.000593,1.466736.085419,2.932227.254057,4.389236.150981,1.307765,1.257567,2.295084,2.573997,2.296576h94.204938c1.134697.014809,2.141616-.724701,2.467026-1.811855c2.757853-9.918402-5.415422-25.295769-24.376084-18.185408Z"
                    transform="translate(0,0)"
                    fill="#fff"
                    style={{
                      stroke: "url(&quot",
                      paintOrder: "fill markers",
                    }}
                  />
                </g>
              </g>
              <g
                id="eUbxc2KBHAG13_to"
                transform="translate(230.26124,42.040123)"
              >
                <g transform="translate(-201.955305,-185.430107)">
                  <path
                    d="M88.940698,194.665284c-.645567-10.621595-9.037246-19.133283-19.647416-19.928394s-20.176425,6.370837-22.397446,16.777613c-4.17191-1.520089-8.838797-.680026-12.218951,2.199472s-4.951754,7.353901-4.114799,11.714984c.1551.760043.826457,1.303945,1.60205,1.297907h66.543249c.447953.001259.876653-.182035,1.18526-.506768s.469877-.762237.445878-1.209602c-.181238-3.325327-1.713925-10.345212-11.397825-10.345212Z"
                    transform="translate(-36.52174 39.51805)"
                    fill="#fff"
                    // stroke="#000"
                  />
                </g>
              </g>
              <rect
                width={140.986}
                height={120}
                stroke="#000"
                style={{
                  fill: "rgb(233, 196, 106)",
                }}
                x={168.975}
                y={136}
              />
              <rect
                width={20.163}
                height={61.739}
                stroke="#000"
                x={219.058}
                y={193.934}
                style={{
                  fill: "rgba(153, 2, 2, 0.655)",
                }}
              />
              <g transform="matrix(1, 0, 0, 1, 364.305273, 9.4021)">
                <path
                  d="M88.940698,194.665284c-.645567-10.621595-9.037246-19.133283-19.647416-19.928394s-20.176425,6.370837-22.397446,16.777613c-4.17191-1.520089-8.838797-.680026-12.218951,2.199472s-4.951754,7.353901-4.114799,11.714984c.1551.760043.826457,1.303945,1.60205,1.297907h66.543249c.447953.001259.876653-.182035,1.18526-.506768s.469877-.762237.445878-1.209602c-.181238-3.325327-1.713925-10.345212-11.397825-10.345212Z"
                  transform="translate(-36.006452 39.51805)"
                  stroke="#000"
                  style={{
                    fill: "rgb(45, 158, 9)",
                  }}
                />
              </g>
              <g
                transform="matrix(0.418135, 0, 0, 0.360851, 94.641801, 163.932482)"
                style={{}}
              >
                <rect
                  width={80}
                  height={80}
                  rx={0}
                  ry={0}
                  transform="translate(97.5 176)"
                  fill="#e9c46a"
                  stroke="#000"
                />
                <rect
                  width={50}
                  height={46}
                  rx={0}
                  ry={0}
                  transform="translate(111.219823 187)"
                  fill="#98d5f4"
                  stroke="#000"
                />
                <line
                  x1={0}
                  y1={-23}
                  x2={0}
                  y2={23}
                  transform="translate(136.219823 210)"
                  fill="none"
                  stroke="#000"
                />
                <line
                  x1={-25}
                  y1={0}
                  x2={25}
                  y2={0}
                  transform="translate(137.5 210)"
                  fill="none"
                  stroke="#000"
                />
              </g>
              <g
                transform="matrix(0.418135, 0, 0, 0.360851, 60.33455, 134.791247)"
                style={{}}
              >
                <rect
                  width={80}
                  height={80}
                  fill="#e9c46a"
                  stroke="#000"
                  x={98.942}
                  y={176}
                />
                <rect
                  width={50}
                  height={46}
                  fill="#98d5f4"
                  stroke="#000"
                  ry={0}
                  rx={0}
                  transform="translate(111.219823 187)"
                />
                <line
                  x1={0}
                  y1={-23}
                  x2={0}
                  y2={23}
                  transform="translate(136.219823 210)"
                  fill="none"
                  stroke="#000"
                />
                <line
                  x1={-25}
                  y1={0}
                  x2={25}
                  y2={0}
                  transform="translate(137.5 210)"
                  fill="none"
                  stroke="#000"
                />
              </g>
              <g
                transform="matrix(0.418135, 0, 0, 0.360851, 94.589319, 134.773638)"
                style={{}}
              >
                <rect
                  width={80}
                  height={80}
                  rx={0}
                  ry={0}
                  transform="translate(97.5 176)"
                  fill="#e9c46a"
                  stroke="#000"
                />
                <rect
                  width={50}
                  height={46}
                  rx={0}
                  ry={0}
                  transform="translate(111.219823 187)"
                  fill="#98d5f4"
                  stroke="#000"
                />
                <line
                  x1={0}
                  y1={-23}
                  x2={0}
                  y2={23}
                  transform="translate(136.219823 210)"
                  fill="none"
                  stroke="#000"
                />
                <line
                  x1={-25}
                  y1={0}
                  x2={25}
                  y2={0}
                  transform="translate(137.5 210)"
                  fill="none"
                  stroke="#000"
                />
              </g>
              <g
                transform="matrix(0.418135, 0, 0, 0.360851, 60.937364, 105.918871)"
                style={{}}
              >
                <rect
                  width={80}
                  height={80}
                  rx={0}
                  ry={0}
                  transform="translate(97.5 176)"
                  fill="#e9c46a"
                  stroke="#000"
                />
                <rect
                  width={50}
                  height={46}
                  rx={0}
                  ry={0}
                  transform="translate(111.219823 187)"
                  fill="#98d5f4"
                  stroke="#000"
                />
                <line
                  x1={0}
                  y1={-23}
                  x2={0}
                  y2={23}
                  transform="translate(136.219823 210)"
                  fill="none"
                  stroke="#000"
                />
                <line
                  x1={-25}
                  y1={0}
                  x2={25}
                  y2={0}
                  transform="translate(137.5 210)"
                  fill="none"
                  stroke="#000"
                />
              </g>
              <g
                transform="matrix(0.418135, 0, 0, 0.360851, 94.589334, 105.901262)"
                style={{}}
              >
                <rect
                  width={80}
                  height={80}
                  fill="#e9c46a"
                  stroke="#000"
                  x={97.5}
                  y={176}
                />
                <rect
                  width={50}
                  height={46}
                  fill="#98d5f4"
                  stroke="#000"
                  ry={0}
                  rx={0}
                  transform="translate(111.219823 187)"
                />
                <line
                  x1={0}
                  y1={-23}
                  x2={0}
                  y2={23}
                  transform="translate(136.219823 210)"
                  fill="none"
                  stroke="#000"
                />
                <line
                  x1={-25}
                  y1={0}
                  x2={25}
                  y2={0}
                  transform="translate(137.5 210)"
                  fill="none"
                  stroke="#000"
                />
              </g>
              <g
                transform="matrix(0.393636, 0, 0, 0.356767, 271.88477, 164.826449)"
                style={{}}
              >
                <rect
                  width={80}
                  height={80}
                  fill="#e9c46a"
                  stroke="#000"
                  ry={0}
                  rx={0}
                  transform="translate(97.5 176)"
                />
                <rect
                  width={50}
                  height={46}
                  rx={0}
                  ry={0}
                  transform="translate(111.219823 187)"
                  fill="#98d5f4"
                  stroke="#000"
                />
                <line
                  x1={0}
                  y1={-23}
                  x2={0}
                  y2={23}
                  transform="translate(136.219823 210)"
                  fill="none"
                  stroke="#000"
                />
                <line
                  x1={-25}
                  y1={0}
                  x2={25}
                  y2={0}
                  transform="translate(137.5 210)"
                  fill="none"
                  stroke="#000"
                />
              </g>
              <g
                transform="matrix(0.393636, 0, 0, 0.356767, 303.565037, 164.809039)"
                style={{}}
              >
                <rect
                  width={80}
                  height={80}
                  rx={0}
                  ry={0}
                  transform="translate(97.5 176)"
                  fill="#e9c46a"
                  stroke="#000"
                />
                <rect
                  width={50}
                  height={46}
                  rx={0}
                  ry={0}
                  transform="translate(111.219823 187)"
                  fill="#98d5f4"
                  stroke="#000"
                />
                <line
                  x1={0}
                  y1={-23}
                  x2={0}
                  y2={23}
                  transform="translate(136.219823 210)"
                  fill="none"
                  stroke="#000"
                />
                <line
                  x1={-25}
                  y1={0}
                  x2={25}
                  y2={0}
                  transform="translate(137.5 210)"
                  fill="none"
                  stroke="#000"
                />
              </g>
              <g
                transform="matrix(0.393636, 0, 0, 0.356767, 271.267887, 135.997606)"
                style={{}}
              >
                <rect
                  width={80}
                  height={80}
                  fill="#e9c46a"
                  stroke="#000"
                  x={98.942}
                  y={176}
                />
                <rect
                  width={50}
                  height={46}
                  fill="#98d5f4"
                  stroke="#000"
                  ry={0}
                  rx={0}
                  transform="translate(111.219823 187)"
                />
                <line
                  x1={0}
                  y1={-23}
                  x2={0}
                  y2={23}
                  transform="translate(136.219823 210)"
                  fill="none"
                  stroke="#000"
                />
                <line
                  x1={-25}
                  y1={0}
                  x2={25}
                  y2={0}
                  transform="translate(137.5 210)"
                  fill="none"
                  stroke="#000"
                />
              </g>
              <g
                transform="matrix(0.393636, 0, 0, 0.356767, 303.51563, 135.980181)"
                style={{}}
              >
                <rect
                  width={80}
                  height={80}
                  rx={0}
                  ry={0}
                  transform="translate(97.5 176)"
                  fill="#e9c46a"
                  stroke="#000"
                />
                <rect
                  width={50}
                  height={46}
                  rx={0}
                  ry={0}
                  transform="translate(111.219823 187)"
                  fill="#98d5f4"
                  stroke="#000"
                />
                <line
                  x1={0}
                  y1={-23}
                  x2={0}
                  y2={23}
                  transform="translate(136.219823 210)"
                  fill="none"
                  stroke="#000"
                />
                <line
                  x1={-25}
                  y1={0}
                  x2={25}
                  y2={0}
                  transform="translate(137.5 210)"
                  fill="none"
                  stroke="#000"
                />
              </g>
              <g
                transform="matrix(0.393636, 0, 0, 0.356767, 271.835362, 107.451959)"
                style={{}}
              >
                <rect
                  width={80}
                  height={80}
                  rx={0}
                  ry={0}
                  transform="translate(97.5 176)"
                  fill="#e9c46a"
                  stroke="#000"
                />
                <rect
                  width={50}
                  height={46}
                  rx={0}
                  ry={0}
                  transform="translate(111.219823 187)"
                  fill="#98d5f4"
                  stroke="#000"
                />
                <line
                  x1={0}
                  y1={-23}
                  x2={0}
                  y2={23}
                  transform="translate(136.219823 210)"
                  fill="none"
                  stroke="#000"
                />
                <line
                  x1={-25}
                  y1={0}
                  x2={25}
                  y2={0}
                  transform="translate(137.5 210)"
                  fill="none"
                  stroke="#000"
                />
              </g>
              <g
                transform="matrix(0.393636, 0, 0, 0.356767, 303.51566, 107.434549)"
                style={{}}
              >
                <rect
                  width={80}
                  height={80}
                  fill="#e9c46a"
                  stroke="#000"
                  x={97.5}
                  y={176}
                />
                <rect
                  width={50}
                  height={46}
                  fill="#98d5f4"
                  stroke="#000"
                  ry={0}
                  rx={0}
                  transform="translate(111.219823 187)"
                />
                <line
                  x1={0}
                  y1={-23}
                  x2={0}
                  y2={23}
                  transform="translate(136.219823 210)"
                  fill="none"
                  stroke="#000"
                />
                <line
                  x1={-25}
                  y1={0}
                  x2={25}
                  y2={0}
                  transform="translate(137.5 210)"
                  fill="none"
                  stroke="#000"
                />
              </g>
              <g
                transform="matrix(0.418135, 0, 0, 0.360851, 137.109087, 156.069323)"
                style={{}}
              >
                <rect
                  width={80}
                  height={80}
                  rx={0}
                  ry={0}
                  transform="translate(97.5 176)"
                  stroke="#000"
                  style={{
                    fill: "rgba(153, 2, 2, 0.655)",
                  }}
                />
                <rect
                  width={50}
                  height={46}
                  rx={0}
                  ry={0}
                  transform="translate(111.219823 187)"
                  fill="#98d5f4"
                  stroke="#000"
                />
                <line
                  x1={0}
                  y1={-23}
                  x2={0}
                  y2={23}
                  transform="translate(136.219823 210)"
                  fill="none"
                  stroke="#000"
                />
                <line
                  x1={-25}
                  y1={0}
                  x2={25}
                  y2={0}
                  transform="translate(137.5 210)"
                  fill="none"
                  stroke="#000"
                />
              </g>
              <g
                transform="matrix(0.418135, 0, 0, 0.360851, 136.233812, 117.273638)"
                style={{}}
              >
                <rect
                  width={80}
                  height={80}
                  rx={0}
                  ry={0}
                  transform="translate(97.5 176)"
                  stroke="#000"
                  style={{
                    fill: "rgba(153, 2, 2, 0.655)",
                  }}
                />
                <rect
                  width={50}
                  height={46}
                  rx={0}
                  ry={0}
                  transform="translate(111.219823 187)"
                  fill="#98d5f4"
                  stroke="#000"
                />
                <line
                  x1={0}
                  y1={-23}
                  x2={0}
                  y2={23}
                  transform="translate(136.219823 210)"
                  fill="none"
                  stroke="#000"
                />
                <line
                  x1={-25}
                  y1={0}
                  x2={25}
                  y2={0}
                  transform="translate(137.5 210)"
                  fill="none"
                  stroke="#000"
                />
              </g>
              <g
                transform="matrix(0.418135, 0, 0, 0.360851, 226.295078, 155.413561)"
                style={{}}
              >
                <rect
                  width={80}
                  height={80}
                  rx={0}
                  ry={0}
                  transform="translate(97.5 176)"
                  stroke="#000"
                  style={{
                    fill: "rgba(153, 2, 2, 0.655)",
                  }}
                />
                <rect
                  width={50}
                  height={46}
                  rx={0}
                  ry={0}
                  transform="translate(111.219823 187)"
                  fill="#98d5f4"
                  stroke="#000"
                />
                <line
                  x1={0}
                  y1={-23}
                  x2={0}
                  y2={23}
                  transform="translate(136.219823 210)"
                  fill="none"
                  stroke="#000"
                />
                <line
                  x1={-25}
                  y1={0}
                  x2={25}
                  y2={0}
                  transform="translate(137.5 210)"
                  fill="none"
                  stroke="#000"
                />
              </g>
              <g
                transform="matrix(0.418135, 0, 0, 0.360851, 226.622989, 121.31299)"
                style={{}}
              >
                <rect
                  width={80}
                  height={80}
                  rx={0}
                  ry={0}
                  transform="translate(97.5 176)"
                  stroke="#000"
                  style={{
                    fill: "rgba(153, 2, 2, 0.655)",
                  }}
                />
                <rect
                  width={50}
                  height={46}
                  rx={0}
                  ry={0}
                  transform="translate(111.219823 187)"
                  fill="#98d5f4"
                  stroke="#000"
                />
                <line
                  x1={0}
                  y1={-23}
                  x2={0}
                  y2={23}
                  transform="translate(136.219823 210)"
                  fill="none"
                  stroke="#000"
                />
                <line
                  x1={-25}
                  y1={0}
                  x2={25}
                  y2={0}
                  transform="translate(137.5 210)"
                  fill="none"
                  stroke="#000"
                />
              </g>
              <g
                transform="matrix(0.418135, 0, 0, 0.360851, 181.374148, 93.770235)"
                style={{}}
              >
                <rect
                  width={80}
                  height={80}
                  rx={0}
                  ry={0}
                  transform="translate(97.5 176)"
                  stroke="#000"
                  style={{
                    fill: "rgba(153, 2, 2, 0.655)",
                  }}
                />
                <rect
                  width={50}
                  height={46}
                  rx={0}
                  ry={0}
                  transform="translate(111.219823 187)"
                  fill="#98d5f4"
                  stroke="#000"
                />
                <line
                  x1={0}
                  y1={-23}
                  x2={0}
                  y2={23}
                  transform="translate(136.219823 210)"
                  fill="none"
                  stroke="#000"
                />
                <line
                  x1={-25}
                  y1={0}
                  x2={25}
                  y2={0}
                  transform="translate(137.5 210)"
                  fill="none"
                  stroke="#000"
                />
              </g>
              <g
                transform="matrix(0.418135, 0, 0, 0.360851, 224.983539, 78.687326)"
                style={{}}
              >
                <rect
                  width={80}
                  height={80}
                  stroke="#000"
                  x={97.5}
                  y={176}
                  style={{
                    fill: "rgba(153, 2, 2, 0.655)",
                  }}
                />
                <rect
                  width={50}
                  height={46}
                  rx={0}
                  ry={0}
                  transform="translate(111.219823 187)"
                  fill="#98d5f4"
                  stroke="#000"
                />
                <line
                  x1={0}
                  y1={-23}
                  x2={0}
                  y2={23}
                  transform="translate(136.219823 210)"
                  fill="none"
                  stroke="#000"
                />
                <line
                  x1={-25}
                  y1={0}
                  x2={25}
                  y2={0}
                  transform="translate(137.5 210)"
                  fill="none"
                  stroke="#000"
                />
              </g>
              <g
                transform="matrix(0.418135, 0, 0, 0.360851, 135.469637, 80.326776)"
                style={{}}
              >
                <rect
                  width={80}
                  height={80}
                  rx={0}
                  ry={0}
                  transform="translate(97.5 176)"
                  stroke="#000"
                  style={{
                    fill: "rgba(153, 2, 2, 0.655)",
                  }}
                />
                <rect
                  width={50}
                  height={46}
                  rx={0}
                  ry={0}
                  transform="translate(111.219823 187)"
                  stroke="#000"
                  fill="#98d5f4"
                />
                <line
                  x1={0}
                  y1={-23}
                  x2={0}
                  y2={23}
                  transform="translate(136.219823 210)"
                  stroke="#000"
                  fill="none"
                />
                <line
                  x1={-25}
                  y1={0}
                  x2={25}
                  y2={0}
                  transform="translate(137.5 210)"
                  stroke="#000"
                  fill="none"
                />
              </g>
              <path
                d="M 239.197 95.972 L 310.677 134.991 L 167.716 134.991 L 239.197 95.972 Z"
                style={{
                  stroke: "rgb(0, 0, 0)",
                  fill: "rgb(78, 85, 49)",
                }}
              />
              <rect
                width={20.163}
                height={61.739}
                stroke="#000"
                x={239.606}
                y={193.964}
                style={{
                  fill: "rgba(153, 2, 2, 0.655)",
                }}
              />
            </svg>
          </a>
        </div>
        <div className="name">
          <h1 className="main-text">Mahima Gajjar</h1>
          <p className="sub-text">
            <span
              class="txt-type"
              data-wait="3000"
              data-words='["Frontend Developer, Backend Developer", "Freelancer"]'
            ></span>
          </p>
        </div>
        <div className="contactme">
          <Link to="/contactme" class="link">
            <div className="contactmeheading-box">
              <h2>ContactMe</h2>
            </div>
            <svg
              className="contactme-svg"
              id="ejQcAnIEep71"
              viewBox="0 0 341 341"
              shape-rendering="geometricPrecision"
              text-rendering="geometricPrecision"
              project-id="14783e8da8b64156998ab714bdd10e64"
              export-id="496926a1d2ca48ed821f167f5b7a6d1d"
              cached="true"
              width="300px"
              height="350px"
            >
              <g transform="translate(.300656 75.451614)">
                <g
                  transform="translate(0-.001745)"
                  clip-path="url(#ejQcAnIEep76)"
                >
                  <g>
                    <path
                      d="M91.164062,20.183594h171.007813v151.632812h-171.007813v-151.632812Zm0,0"
                      transform="translate(0 0.001746)"
                      fill="#fff"
                    />
                  </g>
                  <clipPath id="ejQcAnIEep76">
                    <path
                      d="M91,20h171.984375v152L91,172v-152Zm0,0"
                      transform="translate(.000001 0)"
                    />
                  </clipPath>
                </g>
                <g clip-path="url(#ejQcAnIEep711)">
                  <g>
                    <path
                      d="M-3245.016478,1800.031015h3363.009066v2981.98378h-3363.009066v-2981.98378Zm0,0"
                      transform="matrix(.05085 0 0 0.05085 256.172-71.3473)"
                      fill="none"
                      stroke="#272537"
                      stroke-width="15"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                    />
                  </g>
                  <clipPath id="ejQcAnIEep711">
                    <path
                      d="M90.351562,19.367188h172.632813v153.261718h-172.632813v-153.261718Zm0,0"
                      transform="translate(.000001 0)"
                    />
                  </clipPath>
                </g>
                <g clip-path="url(#ejQcAnIEep716)">
                  <g transform="translate(.378944 0)">
                    <path
                      d="M91.164062,20.183594h171.007813v19.269531h-171.007813v-19.269531Zm0,0"
                      transform="translate(-.378944 0.028095)"
                      fill="#ffcc53"
                      stroke="#000"
                    />
                  </g>
                  <clipPath id="ejQcAnIEep716">
                    <path
                      d="M91,20h171.984375v20L91,40v-20Zm0,0"
                      transform="translate(.000001 0)"
                    />
                  </clipPath>
                </g>
                <g clip-path="url(#ejQcAnIEep719)">
                  <clipPath id="ejQcAnIEep719">
                    <path
                      d="M90.351562,19.367188h172.632813v21.632812h-172.632813v-21.632812Zm0,0"
                      transform="translate(.000001 0)"
                    />
                  </clipPath>
                </g>
                <path
                  d="M0.000619,0.00595h155.943817"
                  transform="matrix(-.05085 0 0 0.05085 218.539 29.8434)"
                  fill="none"
                  stroke="#272537"
                  stroke-width="32.083"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                />
                <path
                  d="M-28.656055,2062.062719l-112.310276-144.036777"
                  transform="matrix(.05085 0 0 0.05085 256.172-71.3473)"
                  fill="none"
                  stroke="#272537"
                  stroke-width="32.083"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                />
                <path
                  d="M0.033649,0.015955L112.343924,144.052731"
                  transform="matrix(.05085 0 0-.05085 249.002 33.4578)"
                  fill="none"
                  stroke="#272537"
                  stroke-width="32.083"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                />
                <g
                  transform="translate(0 0.003025)"
                  clip-path="url(#ejQcAnIEep727)"
                >
                  <g>
                    <path
                      d="M91.164062,158.238281h171.007813v13.578125h-171.007813v-13.578125Zm0,0"
                      fill="#ffcc53"
                      stroke-width="2"
                    />
                  </g>
                  <clipPath id="ejQcAnIEep727">
                    <path
                      d="M91,158h171.984375v14L91,172v-14Zm0,0"
                      transform="translate(.000001 0)"
                    />
                  </clipPath>
                </g>
                <g clip-path="url(#ejQcAnIEep732)">
                  <g>
                    <path
                      d="M-3245.016478,4514.989817h3363.009066v267.024978h-3363.009066v-267.024978Zm0,0"
                      transform="matrix(.05085 0 0 0.05085 256.172-71.3473)"
                      fill="none"
                      stroke="#272537"
                      stroke-width="15"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                    />
                  </g>
                  <clipPath id="ejQcAnIEep732">
                    <path
                      d="M90.351562,157h172.632813v15.628906h-172.632813v-15.628906Zm0,0"
                      transform="translate(.000001 0)"
                    />
                  </clipPath>
                </g>
                <path
                  d="M130.015625,158.238281h53.390625v13.578125h-53.390625v-13.578125Zm0,0"
                  transform="translate(.000001 0)"
                  fill="#f4a261"
                />
                <g clip-path="url(#ejQcAnIEep738)">
                  <g>
                    <path
                      d="M-2480.968596,4514.989817h1049.970486v267.024978h-1049.970486v-267.024978Zm0,0"
                      transform="matrix(.05085 0 0 0.05085 256.172-71.3473)"
                      fill="none"
                      stroke="#272537"
                      stroke-width="15"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                    />
                  </g>
                  <clipPath id="ejQcAnIEep738">
                    <path d="M129,157h56v15.628906h-56L129,157Zm0,0" />
                  </clipPath>
                </g>
                <g clip-path="url(#ejQcAnIEep743)">
                  <g>
                    <path
                      d="M5.366301,5.372321h259.659176v217.591103h-259.659176v-217.591103Zm0,0"
                      transform="matrix(.209484 0 0 0.209557 97.9774 48.8117)"
                      fill="none"
                      stroke="#000"
                      stroke-width="10.742"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                    />
                  </g>
                  <clipPath id="ejQcAnIEep743" />
                </g>
                <g clip-path="url(#ejQcAnIEep747)">
                  <g transform="translate(0 0.000001)">
                    <path
                      id="ejQcAnIEep746"
                      d="M170.25,48.785156h84.472656v8.195313h-84.472656v-8.195313Zm0,0"
                      transform="translate(0 0.000001)"
                      opacity="0"
                      fill="#264653"
                      stroke="#000"
                      stroke-dasharray="185.34"
                    />
                  </g>
                  <clipPath id="ejQcAnIEep747">
                    <path
                      d="M170.25,48.785156h84.476562v8.195313h-84.476562v-8.195313Zm0,0"
                      transform="translate(0 0.000001)"
                    />
                  </clipPath>
                </g>
                <g clip-path="url(#ejQcAnIEep752)">
                  <g>
                    <path
                      id="ejQcAnIEep751"
                      d="M170.25,61.984375h84.472656v8.191406h-84.472656v-8.191406Zm0,0"
                      opacity="0"
                      fill="#264653"
                      stroke="#000"
                    />
                  </g>
                  <clipPath id="ejQcAnIEep752">
                    <path d="M170.25,61.984375h84.476562v8.191406h-84.476562v-8.191406Zm0,0" />
                  </clipPath>
                </g>
                <g clip-path="url(#ejQcAnIEep757)">
                  <g>
                    <path
                      id="ejQcAnIEep756"
                      d="M170.25,75.328125h84.472656v8.191406h-84.472656v-8.191406Zm0,0"
                      transform="translate(0-.49854)"
                      opacity="0"
                      fill="#264653"
                      stroke="#000"
                    />
                  </g>
                  <clipPath id="ejQcAnIEep757">
                    <path d="M170.25,75.328125h84.476562v8.191406h-84.476562v-8.191406Zm0,0" />
                  </clipPath>
                </g>
                <g clip-path="url(#ejQcAnIEep762)">
                  <g>
                    <path
                      id="ejQcAnIEep761"
                      d="M170.25,88.761719h84.472656v8.191406h-84.472656v-8.191406Zm0,0"
                      opacity="0"
                      fill="#264653"
                      stroke="#000"
                    />
                  </g>
                  <clipPath id="ejQcAnIEep762">
                    <path d="M170.25,88.761719h84.476562v8.191406h-84.476562v-8.191406Zm0,0" />
                  </clipPath>
                </g>
                <path
                  id="ejQcAnIEep764"
                  d="M-0.001134,0.999818h116.943961"
                  transform="matrix(.748355 0 0 0.748355 98.2352 106.765539)"
                  fill="none"
                  stroke="#000"
                  stroke-dashoffset="110"
                  stroke-dasharray="116.95"
                />
                <path
                  id="ejQcAnIEep765"
                  d="M-0.000553,1.000775h62.428574"
                  transform="matrix(.748355 0 0 0.748355 97.9692 117.833)"
                  fill="none"
                  stroke="#000"
                  stroke-dashoffset="60"
                  stroke-dasharray="62.43"
                />
                <path
                  id="ejQcAnIEep766"
                  d="M-0.000202,1.002301h209.626382"
                  transform="matrix(.748355 0 0 0.748355 97.8517 130.215)"
                  fill="none"
                  stroke="#000"
                  stroke-dashoffset="210"
                  stroke-dasharray="209.63"
                />
                <path
                  id="ejQcAnIEep767"
                  d="M-0.000404,0.997906h56.953025"
                  transform="matrix(.748355 0 0 0.748355 212.489 142.937)"
                  fill="none"
                  stroke="#000"
                  stroke-dashoffset="60"
                  stroke-dasharray="56.96"
                />
                <path
                  id="ejQcAnIEep768"
                  d="M0.001933,0.999818h77.691212"
                  transform="matrix(.748355 0 0 0.748355 196.702 106.267)"
                  fill="none"
                  stroke="#000"
                  stroke-dashoffset="80"
                  stroke-dasharray="77.7"
                />
                <path
                  id="ejQcAnIEep769"
                  d="M-0.002267,1.000775h133.167039"
                  transform="matrix(.748355 0 0 0.748355 155.072 117.833)"
                  fill="none"
                  stroke="#000"
                  stroke-dashoffset="130"
                  stroke-dasharray="133.17"
                />
                <path
                  id="ejQcAnIEep770"
                  d="M0.002511,1.001989h92.123905"
                  transform="matrix(.748355 0 0 0.748355 97.8497 142.933945)"
                  fill="none"
                  stroke="#000"
                  stroke-dashoffset="90"
                  stroke-dasharray="92.13"
                />
                <path
                  id="ejQcAnIEep771"
                  d="M-0.000823,0.997868l40.625551.000026"
                  transform="matrix(.748355 0 0 0.748355 173.708 142.937)"
                  fill="none"
                  stroke="#000"
                  stroke-dashoffset="40"
                  stroke-dasharray="40.63"
                />
              </g>
              <g transform="translate(80.410849 65.197449)">
                <rect
                  id="ejQcAnIEep773"
                  width="55.644448"
                  height="47.216589"
                  rx="0"
                  ry="0"
                  transform="translate(19.793082 59.039086)"
                  fill="#94d1ee"
                  fill-opacity="0"
                  stroke="#000"
                />
                <path
                  id="ejQcAnIEep774"
                  d="M-18.555501,-24.1L-9.531466,-24.1L-29.531466,-24.1L-18.555501,-24.1Z"
                  transform="translate(52.968996 130.355675)"
                  fill="#2a9d8f"
                  stroke="#000"
                />
                <path
                  id="ejQcAnIEep775"
                  d="M-10.609613,-14.1L2.468534,-14.1L-29.531466,-14.1L-10.609613,-14.1Z"
                  transform="translate(72.491576 120.354166)"
                  fill="#2a9d8f"
                  stroke="#000"
                />
              </g>
              <path
                d="M23.184197,22.145599c-3.490365-3.224463-7.895831,2.404706,0,6.56325c7.895831-4.158544,3.490365-9.787713,0-6.56325Z"
                transform="translate(79.562232 215.795141)"
                fill="#e76f51"
                stroke="#000"
              />
              <path
                d="M23.184197,22.145599c-3.490365-3.224463-7.895831,2.404706,0,6.56325c7.895831-4.158544,3.490365-9.787713,0-6.56325Z"
                transform="translate(94.664183 215.795141)"
                fill="#e76f51"
                stroke="#000"
              />
              <rect
                width="10"
                height="10"
                rx="0"
                ry="0"
                transform="translate(230.612639 101.610134)"
                fill="#fff"
                stroke="#000"
              />
              <rect
                width="10"
                height="10"
                rx="0"
                ry="0"
                transform="translate(227.587151 98.960203)"
                fill="#e76f51"
                stroke="#000"
              />
              <circle
                id="ejQcAnIEep780"
                r="1"
                transform="translate(121.848385 143.187991)"
                fill="#ffcc53"
                stroke="#000"
              />
            </svg>
          </Link>
        </div>
        <div className="resume" onClick={handleDownload}>
          <div className="resumeheading-box">
            <h2>Resume</h2>
          </div>
          <svg
            className="resume-svg"
            id="eGNsHDgmMvZ1"
            viewBox="0 0 303 256"
            cached="false"
          >
            <rect
              width="150"
              height="200"
              rx="0"
              ry="0"
              transform="matrix(.984808-.173648 0.173648 0.984808 59.069019 42.649988)"
              fill="#9ad1ea"
              stroke="#000"
            />
            <rect
              width="130"
              height="180"
              rx="0"
              ry="0"
              transform="matrix(.984808-.173648 0.173648 0.984808 70.653578 50.742368)"
              fill="#fff"
              stroke="#000"
            />
            <g transform="translate(.000001 0)">
              <path
                id="eGNsHDgmMvZ5"
                d="M12.79,40c9.997312,0,9.997312,10,19.994625,10s9.997313-10,19.994625-10s10.01075,10,19.994625,10s9.997313-10,20.008063-10s9.997312,10,20.008062,10"
                transform="matrix(.970496-.241117 0.241117 0.970496 79.712293 86.321365)"
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeDashoffset="115"
                strokeDasharray="115.56"
              />
              <path
                id="eGNsHDgmMvZ6"
                d="M12.79,40c9.997312,0,9.997312,10,19.994625,10s9.997313-10,19.994625-10s10.01075,10,19.994625,10s9.997313-10,20.008063-10s9.997312,10,20.008062,10"
                transform="matrix(.970496-.241117 0.241117 0.970496 82.123461 96.026326)"
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeDashoffset="115"
                strokeDasharray="115.56"
              />
              <path
                id="eGNsHDgmMvZ7"
                d="M12.79,40c9.997312,0,9.997312,10,19.994625,10s9.997313-10,19.994625-10s10.01075,10,19.994625,10s9.997313-10,20.008063-10s9.997312,10,20.008062,10"
                transform="matrix(.970496-.241117 0.241117 0.970496 83.329045 105.731287)"
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeDashoffset="115"
                strokeDasharray="115.56"
              />
              <path
                id="eGNsHDgmMvZ8"
                d="M12.79,40c9.997312,0,9.997312,10,19.994625,10s9.997313-10,19.994625-10s10.01075,10,19.994625,10s9.997313-10,20.008063-10s9.997312,10,20.008062,10"
                transform="matrix(.970496-.241117 0.241117 0.970496 84.534629 115.285528)"
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeDashoffset="115"
                strokeDasharray="115.56"
              />
              <path
                id="eGNsHDgmMvZ9"
                d="M12.79,40c9.997312,0,9.997312,10,19.994625,10s9.997313-10,19.994625-10s10.01075,10,19.994625,10s9.997313-10,20.008063-10s9.997312,10,20.008062,10"
                transform="matrix(.970496-.241117 0.241117 0.970496 86.292746 124.990489)"
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeDashoffset="115"
                strokeDasharray="115.56"
              />
            </g>
            <g
              id="eGNsHDgmMvZ10_ts"
              transform="translate(114.521299,91.655488) rotate(-15.268073) scale(0,0)"
            >
              <g transform="translate(-50,-50.000002)">
                <circle
                  r="20"
                  transform="translate(49.249341 53.412947)"
                  fill="#e9c46a"
                  stroke="#000"
                />
                <rect
                  width="10"
                  height="10"
                  rx="14.61"
                  ry="14.61"
                  transform="matrix(1 0 0 1.012426 43.095912 40.207142)"
                  fill="#fff"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M47.75,68.09v-1.011122c-.017271-5.515059-4.484322-9.981608-10-9.998878v0c-5.515678.01727-9.982729,4.483819-10,9.998878v1.011122Z"
                  transform="translate(11.638304-4.176131)"
                  fill="#e76f51"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </g>
            <path
              id="eGNsHDgmMvZ14"
              d="M46.849999,16.82L36.690447,18.684246L28.077349,17.052517L26.85,16.82L46.85,16.82L46.849999,16.82Z"
              transform="matrix(.984808-.173648 0.173648 0.984808 140.143352 21.197326)"
              fill="#e76f51"
              stroke="#000"
            />
            <rect
              id="eGNsHDgmMvZ15"
              width="0"
              height="10"
              rx="0"
              ry="0"
              transform="matrix(.984808-.173648 0.173648 0.984808 137.520203 77.463428)"
              fill="#003554"
              stroke="#000"
            />
            <rect
              id="eGNsHDgmMvZ16"
              width="0"
              height="10"
              rx="0"
              ry="0"
              transform="matrix(.984808-.173648 0.173648 0.984808 140.405443 92.950047)"
              fill="#003554"
              stroke="#000"
            />
            <rect
              id="eGNsHDgmMvZ17"
              width="40"
              height="0"
              rx="0"
              ry="0"
              transform="matrix(.984808-.173648 0.173648 0.984808 106.800322 177.802951)"
              fill="#f4a261"
              stroke="#000"
            />
            <rect
              id="eGNsHDgmMvZ18"
              width="60"
              height="0"
              rx="0"
              ry="0"
              transform="matrix(.984808-.173648 0.173648 0.984808 155.116753 168.79446)"
              fill="#003554"
              stroke="#000"
            />
          </svg>
          <h6>To download the resume, Click.</h6>
        </div>
        <div className="socialmedia">
          <svg
            class="social-svg"
            id="ecfYqkDzjoQ1"
            viewBox="0 0 300 300"
            cached="true"
            width="260"
            height="260"
          >
            <rect
              width="180"
              height="100"
              rx="0"
              ry="0"
              transform="translate(60.17149 108.449952)"
              fill="#e9c46a"
              stroke-width="2"
            />
            <path
              id="ecfYqkDzjoQ3"
              d="M60.17149,102.131785h180l-56.262776,38.259286h-66.503538L60.17149,102.131785Z"
              transform="matrix(1.014566 0 0 1-2.187398 6.318167)"
              fill="#fada8e"
              stroke="#000"
            />
            <g id="ecfYqkDzjoQ4_to" transform="translate(112.311339,143.37819)">
              <rect
                id="ecfYqkDzjoQ4"
                width="130"
                height="70"
                rx="0"
                ry="0"
                transform="translate(-23,-23)"
                opacity="0"
                fill="#fff"
                stroke="#000"
              />
            </g>
            <path
              d="M57.541567,231.197731l58.128647-61.740714l67.615265.555863l55.567062,61.184851h-181.310974Z"
              transform="translate(1.318949-22.747779)"
              fill="#e9c46a"
              stroke="#000"
            />
            <g
              id="ecfYqkDzjoQ6_to"
              transform="translate(165.331702,160.997459)"
            >
              <path
                d="M34.184295,24.718736c-13.089115-12.08083-29.609924,9.009516,0,24.589991c29.609923-15.580475,13.089114-36.670821,0-24.589991Z"
                transform="translate(-49.999996,-50.074374)"
                fill="#e76f51"
                stroke="#000"
              />
            </g>
            <path
              d="M117.537054,170.01288L59.065428,231.753594l.342979-100l58.128647,38.259286Z"
              transform="translate(-.547891-23.303642)"
              fill="#fada8e"
              stroke="#000"
            />
            <path
              d="M183.285482,170.012881l56.262776-38.259287v100l-56.262776-61.740713Z"
              transform="translate(.623232-23.303642)"
              fill="#fada8e"
              stroke="#000"
            />
            <g
              id="ecfYqkDzjoQ9_to"
              transform="translate(153.264699,121.816195)"
            >
              <text
                id="ecfYqkDzjoQ9"
                dx="0"
                dy="0"
                fontFamily='"ecfYqkDzjoQ1:::Oswald"'
                fontSize="15"
                fontWeight="700"
                transform="translate(-41.068009,5.272683)"
                opacity="0"
                fill="#e76f51"
                strokeWidth="0"
              >
                <tspan y="0" fontWeight="700" stroke-width="0">
                  Social Links
                </tspan>
              </text>
            </g>
            <path
              id="ecfYqkDzjoQ11"
              d="M33.5,38.5c-4.361905,3.466667-5.766667,6.27619-7.5,15-1.733333-8.72381-3.138095-11.533333-7.5-15c4.361905-3.466667,5.766667-6.27619,7.5-15c1.733333,8.72381,3.138095,11.533333,7.5,15Z"
              transform="translate(165.408714 26.767436)"
              opacity="0"
              fill="#fff"
              stroke="#000"
            />
            <path
              id="ecfYqkDzjoQ12"
              d="M33.5,38.5c-4.361905,3.466667-5.766667,6.27619-7.5,15-1.733333-8.72381-3.138095-11.533333-7.5-15c4.361905-3.466667,5.766667-6.27619,7.5-15c1.733333,8.72381,3.138095,11.533333,7.5,15Z"
              transform="translate(79.404114 117.15854)"
              opacity="0"
              fill="#fff"
              stroke="#000"
            />
            <path
              id="ecfYqkDzjoQ13"
              d="M28.5,31c-2.907937,1.733334-3.844445,3.138095-5,7.5-1.155555-4.361905-2.092063-5.766666-5-7.5c2.907937-1.733333,3.844445-3.138095,5-7.5c1.155555,4.361905,2.092063,5.766667,5,7.5Z"
              transform="translate(180.408714 19.267436)"
              opacity="0"
              fill="#fff"
              stroke="#000"
            />
            <path
              id="ecfYqkDzjoQ14"
              d="M28.5,31c-2.907937,1.733334-3.844445,3.138095-5,7.5-1.155555-4.361905-2.092063-5.766666-5-7.5c2.907937-1.733333,3.844445-3.138095,5-7.5c1.155555,4.361905,2.092063,5.766667,5,7.5Z"
              transform="translate(185.408714 41.767436)"
              opacity="0"
              fill="#fff"
              stroke="#000"
            />
            <path
              id="ecfYqkDzjoQ15"
              d="M28.5,31c-2.907937,1.733334-3.844445,3.138095-5,7.5-1.155555-4.361905-2.092063-5.766666-5-7.5c2.907937-1.733333,3.844445-3.138095,5-7.5c1.155555,4.361905,2.092063,5.766667,5,7.5Z"
              transform="translate(155.408714 102.15854)"
              opacity="0"
              fill="#fff"
              stroke="#000"
            />
            <path
              id="ecfYqkDzjoQ16"
              d="M28.5,31c-2.907937,1.733334-3.844445,3.138095-5,7.5-1.155555-4.361905-2.092063-5.766666-5-7.5c2.907937-1.733333,3.844445-3.138095,5-7.5c1.155555,4.361905,2.092063,5.766667,5,7.5Z"
              transform="translate(74.404114 102.15854)"
              opacity="0"
              fill="#fff"
              stroke="#000"
            />
          </svg>
          <div className="icons">
            <div className="icon github">
              <a
                href="https://github.com/MahimaGajjar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="svg-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.835 2.805 1.305 3.49.998.108-.776.42-1.305.76-1.605-2.665-.3-5.466-1.33-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.302-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.295-1.552 3.3-1.23 3.3-1.23.645 1.653.24 2.874.105 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.81 1.096.81 2.21 0 1.595-.015 2.875-.015 3.265 0 .315.21.69.825.575 4.77-1.58 8.205-6.08 8.205-11.38 0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            </div>

            <div className="icon linkedin">
              <a
                href="https://www.linkedin.com/in/mahima-gajjar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="svg-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 0h-16c-2.211 0-4 1.789-4 4v16c0 2.211 1.789 4 4 4h16c2.211 0 4-1.789 4-4v-16c0-2.211-1.789-4-4-4zm-11 19h-3v-10h3v10zm-1.5-11.47c-.966 0-1.75-.78-1.75-1.75s.784-1.75 1.75-1.75 1.75.78 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.47h-3v-5.5c0-1.378-.026-3.145-1.918-3.145-1.921 0-2.082 1.503-2.082 3.035v5.61h-3v-10h2.877v1.362h.042c.4-.759 1.376-1.56 2.834-1.56 3.032 0 3.607 1.993 3.607 4.583v5.615z" />
                </svg>
              </a>
            </div>

            <div className="icon mail">
              <a
                href="mailto:gajjarmahima09@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="svg-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 3h-20c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2v-14c0-1.103-.897-2-2-2zm0 4l-10 7-10-7v-2l10 7 10-7v2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="extra">
          <svg
            id="eeLJ3NBQkhu1"
            viewBox="0 0 171 171"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            cached="false"
            class="extra-svg"
            width="150"
            height="150" // Adjust size as needed
          >
            <g transform="translate(-92.13499-88.393577)">
              <g transform="translate(-.265008 0)">
                <g
                  id="eeLJ3NBQkhu4_tr"
                  transform="translate(176.406544,173.893578) rotate(0)"
                >
                  <g transform="translate(-176.406543,-173.893577)">
                    <path
                      d="M68.990552,113.548099c-9.71971,17.001312-3.808359,36.737502,40.716747,29.637422c2.337149-.371131,3.795105-2.16051,4.5771-3.485976s1.577244-3.49923.728978-5.708341C98.900749,91.89882,78.851639,96.626315,68.990552,113.548099Z"
                      transform="translate(55.152148 27.16665)"
                      fill="#A19AD3"
                      stroke="#E1EACD"
                    />
                    <path
                      d="M68.990552,113.548099c-9.71971,17.001312-3.808359,36.737502,40.716747,29.637422c2.337149-.371131,3.795105-2.16051,4.5771-3.485976s1.577244-3.49923.728978-5.708341C98.900749,91.89882,78.851639,96.626315,68.990552,113.548099Z"
                      transform="matrix(.410172 0.912008-.912008 0.410172 257.358377 5.779852)"
                      fill="#A19AD3"
                      stroke="#E1EACD"
                    />
                    <path
                      d="M68.988814,234.060549c9.861309,16.921837,29.910868,21.649348,46.028275-20.44317.843866-2.209117.026508-4.369634-.728995-5.708359s-2.24442-3.092764-4.577202-3.485986c-44.530522-7.100103-50.446423,12.63615-40.722078,29.637515Z"
                      transform="translate(52.177498-33.50484)"
                      fill="#A19AD3"
                      stroke="#E1EACD"
                    />
                    <path
                      d="M68.988814,234.060549c9.861309,16.921837,29.910868,21.649348,46.028275-20.44317.843866-2.209117.026508-4.369634-.728995-5.708359s-2.24442-3.092764-4.577202-3.485986c-44.530522-7.100103-50.446423,12.63615-40.722078,29.637515Z"
                      transform="matrix(.583941-.811796 0.811796 0.583941-60.05805 151.100552)"
                      fill="#A19AD3"
                      stroke="#E1EACD"
                    />
                    <path
                      d="M267.837415,234.060469c9.719706-17.001312,3.808357-36.737502-40.716735-29.637422-2.337148.371131-3.795104,2.16051-4.577098,3.485976s-1.577244,3.49923-.728978,5.708341c16.112622,42.092384,36.161726,37.364889,46.022811,20.443105Z"
                      transform="translate(-39.053736-27.973186)"
                      fill="#A19AD3"
                      stroke="#E1EACD"
                    />
                    <path
                      d="M267.84163,113.548372c-9.861305-16.921845-29.910858-21.649358-46.02826,20.443178-.843866,2.209119-.026509,4.369636.728995,5.708362s2.244419,3.092765,4.5772,3.485988c44.530508,7.100105,50.446408-12.636156,40.722065-29.637528Z"
                      transform="translate(-34.946979 32.337744)"
                      fill="#A19AD3"
                      stroke="#E1EACD"
                    />
                  </g>
                </g>
              </g>
              <g>
                <circle
                  r="32.365"
                  transform="translate(177.635 173.20044)"
                  fill="#FF7F3E"
                  stroke="#E5D9F2"
                />
                <circle
                  r="25"
                  transform="translate(177.635 173.20044)"
                  fill="#FFF574"
                  stroke="#E1EACD"
                />
              </g>
            </g>
            <circle r="4" transform="translate(76.616036 85.5)" />
            <circle r="4" transform="translate(89.50001 79.242074)" />
            <path
              d="M84.551427,90.426326q8.667094,3.485977,8.667091-4.875996"
              transform="translate(-1.931418 1.755836)"
              fill="none"
              stroke="#000"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default HomePage;
