import React, { useState } from "react";
import Parser from "./Parser";
import "./App.css";

function App() {
  const stringToXMLFile = (input) => {
    const element = document.createElement("a");
    const file = new Blob([input], {
      type: "text/xml",
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.xml";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };
  return (
    <div className="App">
      <h1>CSV to Episerver XML redirects</h1>
      <p>
        A tool to convert a .csv file containing redirects to the XML format
        expected by the Episerver Redirect Manager
      </p>
      <Parser createXML={stringToXMLFile}>
        <span>Drop CSV file here or click to upload.</span>
      </Parser>
      <div>
        <button onClick={stringToXMLFile}>Download XML</button>
      </div>
    </div>
  );
}

export default App;
