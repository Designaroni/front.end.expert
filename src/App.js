import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>Welcome to <a className="inline-anchor"href="https://front.end.expert/">Front<span class="typography-small-x">x</span>End<span class="typography-small-x">x</span>Expert</a></h1>
      </div>
    );
  }
}

export default hot(module)(App);