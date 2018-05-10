import React from 'react';
import sha256 from 'crypto-js/sha256';

class Block {
  constructor(index, hash, previousHash, timestamp, data) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.data = data;
  }
  calculateHash(index, previousHash, timestamp, data) {
    return sha256(index + previousHash + timestamp + data).toString();
  }
  mineNext(data) {
    const index = this.index + 1;
    const timestamp = new Date();
    const hash = this.calculateHash(index, this.hash, timestamp, data);
    return new Block(index, hash, this.hash, timestamp, data);
  }
}

export function BlockComponentSimple(props) {
  const { index, hash, timestamp, data, previousHash } = props.block;
  return (
    <div id={hash} className="block">
      <div>{index}</div>
      <div className="hash">{hash}</div>
      <div>{timestamp}</div>
      <div>{data}</div>
      <div>{previousHash}</div>
    </div>
  );
}

export default function BlockComponent(props) {
  const { index, timestamp, data } = props.block;
  const timestampFormatted = timestamp.toLocaleDateString('en-US', { hour: 'numeric', minute: 'numeric'});
  return (
     <article className="media">
      <figure className="media-left">
        <p className="image is-64x64 has-centered has-background-info">
          <span className="icon has-text-white-bis is-large"><i className="fas fa-3x fa-hashtag"></i></span>
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{index}</strong>
            <small className="is-pulled-right">{timestampFormatted}</small>
            <br/>
            {data}
            <br/>
          </p>
        </div>
        <nav className="level is-mobile">
          <div className="level-left">
            <a className="level-item">
              <span className="icon is-small"><i className="fas fa-reply"></i></span>
            </a>
            <a className="level-item">
              <span className="icon is-small"><i className="fas fa-retweet"></i></span>
            </a>
            <a className="level-item">
              <span className="icon is-small"><i className="fas fa-heart"></i></span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  );
}


function letThereBeLight(data) {
  const index = 0;
  const timestamp = new Date();
  const hash = sha256(index, null, timestamp, data).toString();
  return new Block(index, hash, null, timestamp, data);
}

export const genesisBlock = letThereBeLight('init');

