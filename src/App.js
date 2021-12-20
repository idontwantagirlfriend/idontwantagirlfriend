import "./App.css";
import "./css/styles.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { createContext, useState } from "react";
import { Helmet } from "react-helmet";

export default function App() {
  return <div className="App"></div>;
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
