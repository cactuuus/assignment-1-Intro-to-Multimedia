import { useRef, useState } from "react";
import dragonImg from "../media/images/dragon.png";

const HomePage = () => {
  const box = useRef(null);
  let counter = 0;

  const moveAway = (event) => {
    const button = event.target;
    if (counter >= 3) {
      button.style.scale = 0;
      setTimeout(() => {
        button.remove();
      }, 200);
    } else {
      const rect = box.current.getBoundingClientRect();
      const x = Math.floor(Math.random() * rect.width);
      const y = Math.floor(Math.random() * rect.height);
      button.style.translate = `${x}px ${y}px`;
      counter += 1;
    }
  };

  const [msgVisible, setMsgVisible] = useState(false);

  const handleMsgVisible = (event) => {
    event.target.classList.add("active");
    setMsgVisible(true);
  };

  return (
    <main>
      <div className="welcome-msg" ref={box}>
        <h2>Hello and welcome!</h2>
        <p>
          This is my submission for the "Intro to Multimedia" module.
          <br />I created it using React, click{" "}
          <a
            className="ext-link"
            href="https://github.com/cactuuus/assignment-1-Intro-to-Multimedia"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>{" "}
          to see the full project and code on GitHub.
        </p>
        <hr></hr>
        <h4>But first, let me ask you...</h4>
        <p>Do you like origami? Answer honestly.</p>
        <button
          className="choice clickable"
          onClick={(event) => {
            handleMsgVisible(event);
          }}
        >
          Yes
        </button>
        |
        <button
          className="choice unclickable"
          onMouseOver={(event) => {
            moveAway(event);
          }}
        >
          No
        </button>
        {msgVisible && <p>That's great, you're gonna love this place!</p>}
      </div>
      <img
        className="welcome-img origami"
        src={dragonImg}
        alt="origami of a dragon"
      />
    </main>
  );
};

export default HomePage;
