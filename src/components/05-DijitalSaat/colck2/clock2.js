import React from "react";
import "./clock2.scss";
import moment from "moment";

const Clock2 = (props) => {
  //renklerin parametik olarak alınmasına örnek
  // require("moment/locale/tr");
  const timeStr = moment().format("HH:mm");
  const dateStr = moment().format("LL");
  const dayStr = moment().format("dddd");
  const hour = moment().format("HH");
  let message = "";

  if (hour >= 6 && hour < 11) {
    message = "Günaydın";
  } else if (hour >= 11 && hour < 17) {
    message = "İyi Günler";
  } else if (hour >= 17 && hour < 23) {
    message = "İyi Akşamlar";
  } else {
    message = "İyi Geceler";
  }

  return (
    <div
      className="clock-container"
      style={{ backgroundColor: props.bgColor, color: props.textColor }}
    >
      <div className="time">{timeStr}</div>

      <div>
        <div className="date">{dateStr}</div>
        <div className="day">
          {dayStr} {message}
        </div>
      </div>
    </div>
  );
};

export default Clock2;
