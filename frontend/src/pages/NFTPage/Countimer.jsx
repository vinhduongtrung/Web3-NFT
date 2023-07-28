import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import styled from "styled-components";
// import Counttimer from "../../assets/counttimer.jpg"
const CountTimerStyled = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: auto;
  height: auto;
  display: flex;
  .timer-container {
    background-color: #3b3b3b;
    /* background-image: url("../../assets/counttimer.jpg"); */
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
  }
  .timer {
    background-color: #3b3b3b;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  .calendar-clock {
    width: 100%;
    height: auto;
  }
  .timer div:first-child {
    text-align: center;
  }
  h5 {
    font-weight: 400px;
    font-size: 12px;
    line-height: 13.2px;
    font-family: Space Mono;
  }
  .timer div:last-child {
    border: 1px solid #3b3b3b;
    border-radius: 3px;
    display: flex;
    margin-top: 3em;
    padding: 3em;
    text-align: center;
  }
  section p:first-child,
  .timer div:last-child span {
    font-size: 3em;
  }
  /* .timer-clock {
    display: flex;
    flex-direction: row;
  } */
  @media screen and (max-width: 376px) {
    .timer div:last-child {
      margin-left: 2em;
      margin-right: 2em;
      padding: 3em 1em;
    }
  }
`;

const CountTimer = () => {
    const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  let interval = useRef();
  const startTimer = () => {
    const countdownDate = new Date(" July 31, 2023 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
        const days = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60 * 60)));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        console.log("not work");
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  // componentDidMount
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  return (
    <CountTimerStyled>
      <section className="timer-container">
        <section className="timer">
          {/* <div> */}
          {/* <span className="calendar-clock"></span> */}
          <h5 className="calendar-clock">Auctions end in:</h5>
          {/* </div> */}
          <div className="timer-clock">
          <section>
              <p>{timerDays} </p>
              <p>Days</p>
            </section>
            <span>:</span>
            <section>
              <p>{timerHours} </p>
              <p>Hours</p>
            </section>
            <span>:</span>
            <section>
              <p>{timerMinutes}</p>
              <p>Minutes</p>
            </section>
            <span>:</span>
            <section>
              <p>{timerSeconds}</p>
              <p>Seconds</p>
            </section>
          </div>
        </section>
      </section>
    </CountTimerStyled>
  );
};
export default CountTimer;
