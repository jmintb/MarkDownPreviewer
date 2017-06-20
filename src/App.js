import React, { Component } from 'react';
import './App.css';
var marked = require('marked');

class MarkdownPreviewer extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {value: 'Give me a go!'};
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  getMarkup() {
    return({__html: marked(this.state.value)});
  }

  render(){
    return(
      <div className="row">
        <div className="col">
          <h4> Type markdown here: </h4>
          <textarea
            onChange = {this.handleChange}
            defaultValue = {this.state.value}
            className="input col-md"
            rows="12"
          />
        </div>
        <div className="col">
          <h4> Live preview here: </h4>
          <div
            className = "output col-md"
            dangerouslySetInnerHTML={this.getMarkup()}
          />
          </div>
      </div>
    );
  }

}

export default MarkdownPreviewer;
