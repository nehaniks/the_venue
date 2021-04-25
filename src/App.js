import React from "react";
import "./resources/styles.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Featured from "./components/featured";
import VenueInfo from "./components/venueInfo";

const App = () => {
  return (
    <div className="App">
      <Header />
      <>
        <Featured />
      </>
      <VenueInfo />
      <div style={{ backgroundColor: "red", height: "800px" }}></div>
      <div style={{ backgroundColor: "blue", height: "800px" }}></div>
      <div style={{ backgroundColor: "green", height: "800px" }}></div>
      <div style={{ backgroundColor: "yellow", height: "800px" }}></div>
      <Footer />
    </div>
  );
};

export default App;
