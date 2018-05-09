import React, { Component } from 'react';
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
}

export default function  BlockComponent(props) {
  const { index, hash, timestamp, data, previousHash } = props.block;
  return (
    <div id={hash} className="block">
      <div>{index}</div>
      <div>{hash}</div>
      <div>{timestamp}</div>
      <div>{data}</div>
      <div>{previousHash}</div>
    </div>
  );
}


function letThereBeLight(data) {
  const index = 0;
  const timestamp = new Date();
  const hash = sha256(index, null, timestamp, data).toString();
  return new Block(index, hash, null, timestamp, data);
}

export const genesisBlock = letThereBeLight('init');

