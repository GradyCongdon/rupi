import React from 'react';
import QR from './eth_qr.png';

const styles = {
//  borderTop: "solid 6px lightgrey"
};

export default function Footer() {
  return (
    <footer className="footer has-background-info has-text-white-bis" style={styles}>
      <div className="container">
        <div className="content has-text-centered">
          <h3 className="has-text-white-ter">Want one?</h3>
          <p>
            <strong className="has-text-white-ter">Send me ETH</strong>
            <br/>
            <small className="hash">0x5c4bd129cf10e405206E3f316B7C6e0E984a7DE9</small>
            <br/>
            <br/>
            <img src={QR} width="200" height="200" alt="my eth wallet qr code"/>
          </p>
        </div>
      </div>
    </footer>
  );
}
