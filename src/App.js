import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  componentDidMount() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  render() {
    var style1 = {
      backgroundImage: "url(./images/search.png)"
    };
    return (
      <div>
        <div className="row app-header">
          <div className="col-sm-12 col-md-2 col-lg-2">
            {/* <span style={{ color: "white" }} onClick={this.openNav.bind(this)}>
              open
            </span> */}
          </div>
          <div className="col-sm-12 col-md-8 col-lg-8">
            <input
              className="search-box"
              type="text"
              name="searchbox"
              id="searchbox"
            />
          </div>
          <div className="col-sm-12 col-md-2 col-lg-2" />
        </div>
        <div className="main-container">
          <aside className="side-bar">
            <div id="mySidenav" class="sidenav">
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Clients</a>
              <a href="#">Contact</a>
            </div>
          </aside>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">jkkjk</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
