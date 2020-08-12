import React, { useState } from "react";
import "./App.css";

function App() {
  const xmlString = useState(0)
  const xmlString = '<xml></xml>'
  const downloadTxtFile = (string) => {
    const element = document.createElement("a");
    const file = new Blob([string], {
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
      <div>
        <button onClick={downloadTxtFile}>Download XML</button>
      </div>
    </div>
  );
}

export default App;
