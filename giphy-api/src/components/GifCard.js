import React, { Component } from 'react';

class GifCard extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
        <header className="giphy test">
          <div>
            <p>hi</p>
            <p>{this.props.usekey}</p>
          </div>
        </header>
    );
  }
}

export default GifCard;
