import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Clipboard from "clipboard";

import EmojiResultRow from "./EmojiResultRow";
import "./EmojiResults.css";

class EmojiResults extends PureComponent {
  componentDidMount() {
    this.clipboard = new Clipboard(".copy-to-clipboard");
  }

  onSelectApp = title => {
    this.props.onSelectApp(title);
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  render() {
    return (
      <div className="component-emoji-results">
        {this.props.emojiData.map(emojiData => (
          <EmojiResultRow
            key={emojiData.title}
            symbol={emojiData.symbol}
	    thumbnail = {emojiData.thumbnail}
            title={emojiData.title}
            onSelectApp = {this.onSelectApp}
          />
        ))}
      </div>
    );
  }
}
EmojiResults.propTypes = {
  emojiData: PropTypes.array
};
export default EmojiResults;
