import React, { Component } from 'react';
import './App.css';
import SearchBar from "./components/SearchBar";
import GifCard from "./components/GifCard";
import axios from "axios";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      gifs: []
    }
    console.log(this.props.apikey);
  }

  trending() {
    
  }
  render() {
    return (
        <header className="giphy test">
          <div>
            <p>{this.props.apikey}</p>
            {/* <SearchBar key={this.state.key}/> */}
             <GifCard usekey={this.state.key}/>
          </div>
        </header>
    );
  }
}

export default App;
