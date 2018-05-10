import React, { Component } from 'react';
import './bulma.css';
import './App.css';

import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';
import HashLink, { HashLinkStart, HashLinkEnd } from './HashLink';
import Block, { genesisBlock } from './Block';

const data = [
  'second',
  'third',
  'coins for everyone',
  'you get a coin',
  'and you get a coin',
  'and U get a coin',
  'and a coin for oprah',
  'If you gather a bunch of them, you never know what may happen...'
];

const blocks = [genesisBlock]; 
data.forEach(datum => {
  const previousBlock = blocks.pop();
  const nextBlock = previousBlock.mineNext(datum);
  blocks.push(previousBlock);
  blocks.push(nextBlock);
});
console.log(blocks);


class App extends Component {
  render() {
    const blockElements = blocks.map(block => {
      if (!block.previousHash) {
        return (
        <section>
          <Block block={block}/>
        </section>
        );
      }
      return (
        <section>
          <HashLink hash={block.previousHash} />
          <Block block={block}/>
        </section>
      )
    });
    return (
      <div className="App">
        <Navbar label="Rupi" />
        <Hero title="Rupi - A toy blockchain" subtitle="don't invest in it" />
        <section className="section">
          <div className="container">
            <HashLinkStart hash="genesis"/>
            { blockElements }
            <HashLinkEnd hash="the end"/>
          </div>
        </section>
        <Footer/>
      </div>
    );
  }
}

export default App;
