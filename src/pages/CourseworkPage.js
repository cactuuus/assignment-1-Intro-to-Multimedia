import { useState } from "react";

import lab2FinalImg from "../media/images/coursework/lab-2-final.jpg";
import lab3Part1Img from "../media/images/coursework/lab-3-part1.png";
import lab3FinalImg from "../media/images/coursework/lab-3-final.jpg";

const CourseworkPage = () => {
  const [currentReport, setCurrentReport] = useState("");

  const reports = ["HTML & CSS", "Bootstrap & JavaScript"];

  const handleReport = (e) => {
    const target = e.target.getAttribute("value");
    e.target.classList.add("active");
    setCurrentReport(target);
  };

  return (
    <main id="coursework-container">
      <aside>
        <h3>Lab work</h3>
        <ul className="coursework-links">
          {reports.map((reportName) => {
            return (
              <li
                className={
                  (currentReport === reportName ? "active" : "") +
                  " clickable coursework-link"
                }
                onClick={handleReport}
                value={reportName}
                key={reportName}
              >
                {reportName}
              </li>
            );
          })}
        </ul>
      </aside>

      <article className="report">
        {!currentReport && (
          <div id="placeholder">
            <svg viewBox="0 0 119.78 119.78" className="arrow">
              <g id="SVGRepo_bgCarrier"></g>
              <g id="SVGRepo_tracerCarrier"></g>
              <g id="SVGRepo_iconCarrier">
                <g id="Layer_2" data-name="Layer 2">
                  {" "}
                  <g id="Layer_1-2" data-name="Layer 1">
                    {" "}
                    <path d="M60.3,78.46c-.31,5-.39,9-.82,12.91-.86,7.85-7.86,11.57-14.92,7.85A63.53,63.53,0,0,1,34.4,92.84Q19.67,81,5.29,68.78C-.35,64-1.3,58.65,1.58,51.82a30.86,30.86,0,0,1,2.19-4.65A302.23,302.23,0,0,1,31.91,9.31a48.7,48.7,0,0,1,7.64-6.84C46-2.3,51.84,0,53.52,7.92a65.45,65.45,0,0,1,.78,7.69c.14,1.66.24,3.33.4,5.53a32.54,32.54,0,0,0,4.39.14c7.11-.83,14.18-2.09,21.3-2.57a246.17,246.17,0,0,1,24.89-.54c7.68.26,11.38,3.91,12.77,11.46a112.58,112.58,0,0,1,1.63,24.8c-.05,1.42-.31,2.84-.49,4.25-1,8.35-5.08,13.81-14,14.64a17.63,17.63,0,0,0-4.09,1.24A65.73,65.73,0,0,1,78.3,78.24C72.6,78.16,66.9,78.37,60.3,78.46ZM43.47,14c-9,5.63-27.46,31.38-32.4,44.91,10.7,9.07,21.55,18.33,32.52,27.45,1.38,1.15,3.39,1.55,5.33,2.4,1.38-4.27.25-8,.35-11.62.13-4.81.95-6.57,5.41-7.27,5-.8,10.21-.76,15.33-1,7.4-.41,14.84-.49,22.2-1.28a39.24,39.24,0,0,0,16.08-5c2.55-12.13,1.56-25-2.65-33.79-4.31-1.14-8.87-1.08-13.42-.95-10.86.31-21.7.61-32.42,2.73-5.51,1.09-10.8.41-15.4-3.89C44.12,22.77,43.83,18.81,43.47,14Z"></path>{" "}
                    <path d="M43.47,14c.36,4.86.65,8.82.93,12.64,4.6,4.3,9.89,5,15.4,3.89,10.72-2.12,21.56-2.42,32.42-2.73,4.55-.13,9.11-.19,13.42.95,4.21,8.83,5.2,21.66,2.65,33.79a39.24,39.24,0,0,1-16.08,5c-7.36.79-14.8.87-22.2,1.28-5.12.29-10.29.25-15.33,1-4.46.7-5.28,2.46-5.41,7.27-.1,3.65,1,7.35-.35,11.62-1.94-.85-4-1.25-5.33-2.4-11-9.12-21.82-18.38-32.52-27.45C16,45.33,34.44,19.58,43.47,14Z"></path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
            <h3>Click on a link to see its content!</h3>
          </div>
        )}

        {currentReport === reports[0] && (
          <>
            <h3>{reports[0]}</h3>
            <p>
              In this lab we learned about HTML and CSS. We mostly focused on
              styling &lt;div&gt; to produce a static webpage template, styling
              each section using different colors, to better distinguish them.
              <br />
              Below is a screenshot of the finisheed product, or you can click{" "}
              <a className="ext-link" href="lab-ref/lab2.html" target="_blank">
                here
              </a>{" "}
              to open its HTML document it in a new page.
            </p>
            <hr />
            <figure className="report-figure">
              <img src={lab2FinalImg} alt="template webpage"></img>
              <figcaption>The resulting webpage template</figcaption>
            </figure>
          </>
        )}

        {currentReport === reports[1] && (
          <>
            <h3>{reports[1]}</h3>
            <p>
              This lab focused on the use of libraries: Bootstrap and JQuery.
              With them, we first created a simple webpage (available{" "}
              <a className="ext-link" href="lab-ref/lab3.html" target="_blank">
                here
              </a>
              ) which, compared to the previous lab exercise, offers a bit more
              interactivity: It is responsive to the size of the browser's
              window, and when under a certain width, the navbar can be
              collapsed and expanded.
            </p>
            <hr />
            <figure className="report-figure">
              <img src={lab3Part1Img} alt="lab 3, part 1"></img>
              <figcaption>
                Webpage created using Bootstraps and JQuery
              </figcaption>
            </figure>
            <hr />
            <p>
              In the second part of thee lab, we simply looked at one of the
              many online templates available. The template is available{" "}
              <a
                className="ext-link"
                href="lab-ref/freelancer-template/index.html"
                target="_blank"
              >
                here
              </a>
              .
            </p>
            <hr />
            <figure className="report-figure">
              <img src={lab3FinalImg} alt="freelancer template webpage"></img>
              <figcaption>The freelancer template</figcaption>
            </figure>
          </>
        )}
      </article>
    </main>
  );
};

export default CourseworkPage;
