import React, {Component} from 'react';
import logo from './logo.svg';
import FiraMono from './FiraMono-Medium.woff';
import {css} from 'linaria';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className={AppHeader}>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const AppHeader = css`
  background-color: #222;
  background-image: url(${logo});
  height: 150px;
  padding: 20px;
  color: white;
  font-family: FiraMono;
  @font-face {
    font-family: FiraMono;
    src: ${FiraMono};
  }
`;

export default App;
