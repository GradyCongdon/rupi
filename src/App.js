import React, { Component } from 'react';
import './App.css';

import Block, { genesisBlock } from './Block';

class App extends Component {
  render() {
    console.log(genesisBlock);
    genesisBlock.timestamp = genesisBlock.timestamp.toString();
    return (
      <div className="App">
        <h1>Rupi</h1>
        <Block block={genesisBlock}/>
      </div>
    );
  }
}

export default App;
