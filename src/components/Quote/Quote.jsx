import "./Quote.css";
// import GetData from "../../utils/getApi";
//import GetDate from "../../utils/getDate";
//import { currentTime, hour, minute } from "../../utils/getTime";
import { useEffect, useState, useCallback } from "react";

export default function Quote() {
  //date
  const [currentTime, setcurrentTime] = useState();
  const [hour, sethour] = useState();
  const [minute, setminute] = useState();
  const [date, setDate] = useState();

  const useClock = () => {
    const getCurrentTime = useCallback(() => {
      let today = new Date();
      let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "2-digit",
      };
      let thisDate = today.toLocaleDateString("fr-FR", options);
      let Hour = today.getHours().toString();
      let minutes = today.getMinutes().toString();
      if (parseInt(minutes) < 10) minutes = "0" + minutes;
      setcurrentTime(Hour + " h " + minutes);
      sethour(Hour);
      setminute(minutes);
      setDate(thisDate);
    }, []);

    useEffect(() => {
      const timer = setInterval(() => getCurrentTime(), 1000);
      return () => clearTimeout(timer);
    }, [getCurrentTime]);
    console.log("coucou", currentTime);
    return {
      currentTime,
      hour,
      minute,
      date,
    };
  };

  useClock(currentTime, hour, minute);

  //quote
  // const [quote, updateQuote] = useState({});

  // useEffect(() => {
  //   function getQuote() {
  //     const data = new GetData();
  //     data.getQuote().then((data) => updateQuote(data));
  //   }
  //   getQuote();
  // }, []);

  // function handleClick() {
  //   const data = new GetData();
  //   data.getQuote().then((data) => updateQuote(data));
  // }

  return (
    <div className="quote-all">
      <div className="quote ">
        Nous sommes le <span className="underline">{date}</span> et, en France
        métropolitaine, il est{" "}
        <span className="surligne">
          {hour} h {minute}
        </span>
        .
      </div>

      <div className=""></div>
    </div>
  );
}
