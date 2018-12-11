
import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Gallery extends PureComponent {
  renderImage(imageUrl) {
    return (
      <div>
        <img src={require('./appJSONs/thumbnails/image1.jpg')} />
        
      </div>
    );
  }

  render() {
    return (
      <div className="gallery">
        <div className="images">
          {this.props.imageUrls.map(imageUrl => this.renderImage(imageUrl))}
        </div>
      </div>
    );
  }
}
Gallery.propTypes = {
  imageUrls: PropTypes.array
};
export default Gallery;


