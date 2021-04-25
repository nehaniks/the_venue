import React from "react";
import MyButton from "../utils/MyButton";
import { Zoom } from "react-awesome-reveal";

const Pricing = () => {
  const priceState = {
    price: [100, 150, 200],
    position: ["Balcony", "Medium", "Star"],
    desc: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
      "Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    ],
    linkto: ["http://google.com", "http://google.com", "http://google.com"],
    delay: [500, 0, 500],
  };

  const showBoxes = () =>
    priceState.price.map((box, i) => (
      <Zoom key={i} className="pricing_item" delay={priceState.delay[i]}>
        <div className="pricing_inner_wrapper">
          <div className="pricing_title">
            <span>${priceState.price[i]}</span>
            <span>{priceState.position[i]}</span>
          </div>
          <div className="pricing_description">{priceState.desc[i]}</div>
          <div className="pricing_buttons">
            <MyButton
              text="Purchase"
              link={priceState.linkto[i]}
              iconTicket={true}
            />
          </div>
        </div>
      </Zoom>
    ));

  return (
    <div className="bck_black">
      <div className="center_wrapper pricing_section">
        <h2>Pricing</h2>
        <div className="pricing_wrapper">{showBoxes()}</div>
      </div>
    </div>
  );
};

export default Pricing;
