import React, { Component } from 'react';

import { CSVReader } from 'react-papaparse';
import arrayToXml from './utils/arrayToXml';

export default class Parser extends Component {
    dropAreaStyle = {
        dropArea: {
            height: '40vh',
            dropFile: {
                fileSizeInfo: {
                    borderRadius: 3,
                    lineHeight: '1.1em',
                    marginBottom: '0.5em',
                    padding: '0.5em',
                    overflowWrap: 'anywhere',
                },
                fileNameInfo: {
                    borderRadius: 3,
                    fontSize: 14,
                    lineHeight: '1.1em',
                    padding: '0.5em',
                    overflowWrap: 'anywhere',
                },
            },
            dropAreaActive: {
                backgroundColor: 'cornsilk',
                transition: '0.25s all linear',
            },
        },
    };
    handleOnDrop = (data) => {
        const dataString = arrayToXml(data);
        this.props.createXML(dataString);
    };

    handleOnError = (err, file, inputElem, reason) => {
        alert(
            `Error: ${err}, File: ${file}, Reason: ${reason}, Input element: ${inputElem}`
        );
    };

    handleOnRemoveFile = (data) => {
        alert('File removed. Please upload again.');
    };

    render() {
        return (
            <div className="dropField">
                <CSVReader
                    configOptions={{ error: this.handleOnError }}
                    style={this.dropAreaStyle}
                    onDrop={this.handleOnDrop}
                    onError={this.handleOnError}
                    addRemoveButton
                    removeButtonColor="#659cef"
                    onRemoveFile={this.handleOnRemoveFile}
                >
                    <span>Drop CSV file here or click to upload.</span>
                </CSVReader>
            </div>
        );
    }
}
