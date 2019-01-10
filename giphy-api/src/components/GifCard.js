import React, { Component } from 'react';

class GifCard extends Component {
  render() {
    let {
      fixed_height,

    } = this.props.data.images;
    console.log(this.props.data.images);
    return (
        <div className="aGif">
            <img src={fixed_height.url} width={fixed_height.width} height={fixed_height.height} alt=""/>
        </div>
    );
  }
}

export default GifCard;
