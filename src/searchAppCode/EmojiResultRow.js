import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./EmojiResultRow.css";

class EmojiResultsRow extends PureComponent {
  onSelectApp = title => {
    this.props.onSelectApp(this.props.title);
debugger;
  }

  render() {
    const codePointHex = this.props.symbol.codePointAt(0).toString(16);
      console.log(this.props.symbol);
    const src = this.props.symbol;
    return (
      <div
        className="component-emoji-result-row copy-to-clipboard" onClick={this.onSelectApp}>
        <img alt={this.props.title} src={require('./appJSONs/thumbnails/image1.jpg')}/>
        <span className="title">{this.props.title}</span>
        <span className="info">Click to open App Details</span>
      </div>
    );
  }
}
EmojiResultsRow.propTypes = {
  title: PropTypes.string,
  symbol: PropTypes.string,
  thumbnail : PropTypes.string,
  onSelectApp : PropTypes.func
};
export default EmojiResultsRow;
