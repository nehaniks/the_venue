import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424604.1511815803!2d-118.2714731671875!3d33.754982200000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd2623db249e2f%3A0x67f071ec43c5e34c!2sCalifornia!5e0!3m2!1sen!2sin!4v1619384787724!5m2!1sen!2sin"
        width="100%"
        height="500px"
        frameBorder="0"
        title="gglemaps"
        allowfullscreen=""
      ></iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
