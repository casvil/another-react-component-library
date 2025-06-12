import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import moment from "moment";

const Timer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

const CircleWrap = styled.div`
  .circle {
    width: ${({ width }) => width}px;
    height: ${({ width }) => width}px;
  }
  background: #fefcff;
  border-radius: 50%;
  border: 1px solid #cdcbd0;
  width: ${({ width }) => width}px;
  height: ${({ width }) => width}px;

  .circle .mask,
  .circle .fill {
    width: ${({ width }) => width}px;
    height: ${({ width }) => width}px;
    position: absolute;
    border-radius: 50%;
  }

  .circle .mask {
    clip: rect(
      0px,
      ${({ width }) => width}px,
      ${({ width }) => width}px,
      ${({ width }) => width / 2}px
    );
  }

  .inside-circle {
    width: ${({ width }) => width - 10}px;
    height: ${({ width }) => width - 10}px;
    border-radius: 50%;
    background: #d2eaf1;
    line-height: 120px;
    text-align: center;
    margin-top: 5px;
    margin-left: 5px;
    color: #1e51dc;
    position: absolute;
    z-index: 100;
    font-weight: 700;
    font-size: 2em;
  }

  /* 3rd progress bar */
  .mask .fill {
    clip: rect(
      0px,
      ${({ width }) => width / 2}px,
      ${({ width }) => width}px,
      0px
    );
    background-color: #227ded;
  }

  .mask.full,
  .circle .fill {
    transform: rotate(${({ rotation }) => rotation}deg);
  }
`;

const Circle = ({
  initialTime,
  rotation,
  setInitialTime,
  setTime,
  setTimeStarted,
  time,
  timeStarted,
  width,
}) => {
  const handleClick = () => {
    setTimeStarted(!timeStarted);

    // if (setTimeStarted) {
    //   setTime(initialTime);
    // }
  };

  return (
    <CircleWrap width={width} rotation={rotation}>
      <div className="circle">
        <div className="mask full">
          <div className="fill"></div>
        </div>
        <div className="mask half">
          <div className="fill"></div>
        </div>
        <div className="inside-circle">
          <Timer>{moment.utc(time * 1000).format("mm:ss")}</Timer>
          <button onClick={handleClick}>
            {timeStarted ? "stop" : "start"}
          </button>
        </div>
      </div>
    </CircleWrap>
  );
};

const Clock = ({ restartOnEnding = false, startTime = 60, width }) => {
  const [timeStarted, setTimeStarted] = useState(false);
  const [initialTime, setInitialTime] = useState(startTime);
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timer =
      timeStarted && time > 0 && setInterval(() => setTime(time - 1), 1000);

    if (time === 0 && restartOnEnding) {
      setTime(initialTime);
    }

    return () => clearInterval(timer);
  }, [time, timeStarted]);

  return (
    <Circle
      width={width}
      time={time}
      rotation={((360 / 100) * ((time * 100) / initialTime)) / 2}
      timeStarted={timeStarted}
      setTimeStarted={setTimeStarted}
      setTime={setTime}
      setInitialTime={setInitialTime}
      initialTime={initialTime}
    />
  );
};

Clock.propTypes = {
  restartOnEnding: PropTypes.bool,
  startTime: PropTypes.number,
  width: PropTypes.number.isRequired,
};

export default Clock;
