import React, { useState, useEffect, useCallback } from "react";
import { Slide } from "react-awesome-reveal";

const TimeUntil = () => {
  const [time, setTime] = useState({
    days: 0,
    hrs: 0,
    min: 0,
    sec: 0,
  });

  const renderItem = (time, value) => (
    <div className="countdown_item">
      <div className="countdown_time">{time}</div>
      <div className="countdown_tag">{value}</div>
    </div>
  );

  const getTimeUntil = useCallback((deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
    } else {
      const sec = Math.floor((time / 1000) % 60);
      const min = Math.floor((time / 1000 / 60) % 60);
      const hrs = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));

      setTime({
        days,
        hrs,
        min,
        sec,
      });
    }
  }, []);

  useEffect(() => {
    setInterval(() => getTimeUntil("Nov, 20, 2021, 01:20:00"), 1000);
  }, [getTimeUntil]);

  return (
    <Slide left delay={1000}>
      <div className="countdown_wrapper">
        <div className="countdown_top">Event starts in</div>
        <div className="countdown_bottom">
          {renderItem(time.days, "Days")}
          {renderItem(time.hrs, "Hrs")}
          {renderItem(time.min, "Min")}
          {renderItem(time.sec, "Sec")}
        </div>
      </div>
    </Slide>
  );
};

export default TimeUntil;
