import { useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [usetimer, setuseTimer] = useState(true);
  const timeStart = () => {
    usetimer
      ? setInterval(() => {
          setTime((time) => time + 1);
        }, 500)
      : clearTimeout(time);
    setuseTimer(!usetimer);
  };
  const timePause = () => {
    setuseTimer(!usetimer);
  };
  return (
    <>
      <div className="timer">
        <h2>{time}</h2>
        <button className="play" onClick={timeStart}>
          Play
        </button>
        <button className="pause" onClick={timePause}>
          Pause
        </button>
      </div>
    </>
  );
};

export default Timer;
