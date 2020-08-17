import React from 'react';
import Parser from './Parser';
import './App.css';
import stringToXMLFile from './utils/stringToXMLFile';

function App() {
    return (
        <div className="App">
            <h1>
                <span role="img" aria-label="Right arrow">
                    ➡️
                </span>{' '}
                CSV to Episerver XML redirects
            </h1>
            <p>
                A tool to convert a .csv file containing redirects to the XML
                format expected by the Episerver Redirect Manager.
            </p>
            <p>
                To use the tool, create a list of redirects in a spreadsheet
                tool, where the first column is the link to be redirected{' '}
                <em>from</em>, and the second column is the link to be
                redirected <em>to</em>.
            </p>
            <p>
                Then, upload the file here, and it will automatically convert it
                to the XML format expected by the Episerver Redirect Manager.
            </p>
            <p>
                <em>
                    PS: The tool filters out any redirects that don't start with
                    a slash followed by one or more characters. For example:
                    /about-us/ is a valid link, but about-us/ is not.
                </em>
            </p>
            <Parser createXML={stringToXMLFile}>
                <span>Drop CSV file here or click to browse your files.</span>
            </Parser>
        </div>
    );
}

export default App;
