import React from "react";
import "./tailwind.css";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Browse from "./component/Browse";
import Arrived from "./component/Arrived";
import Client from "./component/Client";
import Aside from "./component/AsideMenu";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Browse />
      <Arrived />
      <Client />
      <Aside />
      <Footer />
    </>
  );
}

export default App;
