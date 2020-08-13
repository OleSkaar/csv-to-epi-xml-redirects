import React, { Component } from 'react'
 
import { CSVReader } from 'react-papaparse'
 
export default class Parser extends Component {
  handleOnDrop = (data) => {
    console.log('---------------------------')
    console.log(data)
    console.log('---------------------------')
    // TODO Replace with function that parses CSV and converts to XML string.
    const dataString = data.toString()
    this.props.createXML(dataString)
  }
 
  handleOnError = (err, file, inputElem, reason) => {
    console.log(err)
  }
 
  handleOnRemoveFile = (data) => {
    console.log('---------------------------')
    console.log(data)
    console.log('---------------------------')
  }
 
  render() {
    return (
      <CSVReader
        onDrop={this.handleOnDrop}
        onError={this.handleOnError}
        addRemoveButton
        removeButtonColor='#659cef'
        onRemoveFile={this.handleOnRemoveFile}
      >
        <span>Drop CSV file here or click to upload.</span>
      </CSVReader>
    )
  }
}