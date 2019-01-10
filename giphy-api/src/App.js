import React, { Component } from 'react';
import './App.css';
import SearchBar from "./components/SearchBar";
import GifCard from "./components/GifCard";
import axios from "axios";

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      random: false,
      gifs: []
    }
    console.log(this.props.apikey);
  }

  render() {
    return (
        <div className="giphy test">
          <div>
              <button onclick={() => this.setState({
                random: !random,
              })}>Random</button>
              <SearchBar apikey={this.props.apikey} random={this.state.random}/>
          </div>
        </div>
    );
  }
}

export default App;
