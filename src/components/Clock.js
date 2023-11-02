import { Component } from "react";
import tickSound from "../media/sound/tick.mp3";

import clockFaceImg from "../media/images/clock/clockface.png";
import hourHandImg from "../media/images/clock/hourhand.png";
import minHandImg from "../media/images/clock/minhand.png";
import secHandImg from "../media/images/clock/sechand.png";

class Clock extends Component {
  running;
  tick;
  muted;

  constructor(props) {
    super(props);
    this.handleTime = this.handleTime.bind(this);
    this.setMute = this.setMute.bind(this);
    this.state = { hours: "", minutes: "", seconds: "" };
    this.tick = new Audio(tickSound);
    this.muted = true;
  }

  componentDidMount() {
    this.running = setInterval(this.handleTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.running);
  }

  handleTime = () => {
    const now = new Date();
    this.setState({
      hours: now.getHours(),
      minutes: now.getMinutes(),
      seconds: now.getSeconds(),
    });
    if (!this.muted) {
      this.tick.play();
    }
  };

  setMute = () => {
    this.muted = !this.muted;
  };

  render() {
    const { hours, minutes, seconds } = this.state;

    const secRotate = `rotate(${seconds * 6}deg)`;
    const minRotate = `rotate(${minutes * 6}deg)`;
    const hourRotate = `rotate(${hours * 30 + minutes / 2}deg)`;

    return (
      <div id="clock" style={{ backgroundImage: `url(${clockFaceImg})` }}>
        <button
          id="mute-btn"
          className={this.muted ? "clicked" : ""}
          onClick={this.setMute}
        >
          {this.muted ? (
            <svg height="20px" viewBox="0 0 576 512">
              <path d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" />
            </svg>
          ) : (
            <svg height="20px" viewBox="0 0 640 512">
              <path d="M533.6 32.5C598.5 85.3 640 165.8 640 256s-41.5 170.8-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z" />
            </svg>
          )}
        </button>
        <div
          id="sec"
          style={{
            backgroundImage: `url(${secHandImg})`,
            transform: secRotate,
          }}
        ></div>
        <div
          id="min"
          style={{
            backgroundImage: `url(${minHandImg})`,
            transform: minRotate,
          }}
        ></div>
        <div
          id="hour"
          style={{
            backgroundImage: `url(${hourHandImg})`,
            transform: hourRotate,
          }}
        ></div>
      </div>
    );
  }
}

export default Clock;
