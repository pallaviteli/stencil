import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./OpenApp.css";
import fetchKeywords from "./filterEmoji";
import Gallery from "./Gallery";

class OpenApp extends PureComponent {
  onCloseApp = event => {
    this.props.onCloseApp(event);
  }

  searchKeyword = event => {
  }
  render() {
   
    return (
      <div>
       {this.props.appDetailsData.map(appDetails => (
          <div>
          <div><span>Application Title : </span>{appDetails.title}</div>
          <img alt={appDetails.title} src={appDetails.thumbnail}/>
	 
           <div><span>Application Title : </span>{appDetails.content.descriptionText}</div>

	  <div><span>Github Link : </span>{appDetails.content.githubLink}</div>
	  <div><span>Nexus Link : </span>{appDetails.content.nexusLink}</div>
         <Gallery imageUrls={appDetails.content.additionalResources} />
          </div>

        ))}
      <div>
         
      </div>
      <div>App Title </div>
       <div> App Descritption </div>
      <button onClick={this.onCloseApp}>Close</button>
    </div>
    );
  }
}
OpenApp.propTypes = {
  appDetailsData : PropTypes.array,
  title: PropTypes.string,
  symbol: PropTypes.string,
  thumbnail : PropTypes.string,
  onCloseApp : PropTypes.func
};
export default OpenApp;
