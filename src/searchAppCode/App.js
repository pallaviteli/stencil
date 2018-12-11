import React, { PureComponent } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import EmojiResults from "./EmojiResults";
import {filterEmoji,fetchApplcationDetails} from "./filterEmoji";
import OpenApp from "./OpenApp";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji("", 20),
      appDetailsData : fetchApplcationDetails(""),
      showApp:false
    };
  }

  handleSearchChange = event => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 20)
    });
  };

  handleAppSelected = title => {
   this.setState({
      showApp: true,
      appDetailsData : fetchApplcationDetails(title),
    });
  };

 handleAppClose = event => {
   this.setState({
      showApp: false
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div style={{display: this.state.showApp ? 'none' : 'block' }}>
        <SearchInput textChange={this.handleSearchChange} />
        <EmojiResults onSelectApp={this.handleAppSelected} emojiData={this.state.filteredEmoji} />
	</div>
	{this.state.showApp && 
        <OpenApp appDetailsData={this.state.appDetailsData} onCloseApp={this.handleAppClose} /> 
}
      </div>
    );
  }
}
export default App;
