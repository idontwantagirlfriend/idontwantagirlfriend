import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { createContext, useState } from "react";
import { Helmet } from "react-helmet";
import SideMenu from "./Components/SideMenu";
import Card from "./Components/Card";
import getTextData from "./svc/js/getTextData";

export default function App() {
  const cardData = getTextData(0);
  return (
    <div className="App">
      <PageHead />
      <SideMenu />
      <Card propData={cardData} />
    </div>
  );
}
function PageHead() {
  return (
    <Helmet>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Hello!</title>
    </Helmet>
  );
}
