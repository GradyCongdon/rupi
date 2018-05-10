import React from 'react';
import './HashLink.css'

export default function HashLink(props) {
  const shortHash = props.hash.substring(0, 30);
  return (
    <section className="hash-link">
      <hr className={props.type} width="1"/>
      <p>{shortHash}</p>
      <hr width="1"/>
    </section>
  );
}

export function HashLinkStart(props) {
  return (
    <section className="hash-link hash-link--start">
      <hr className="hidden" width="1"/>
      <p>{props.hash}</p>
      <hr width="1"/>
    </section>
  );
}


export function HashLinkEnd(props) {
  return (
    <section className="hash-link hash-link--end">
      <hr width="1"/>
      <p>{props.hash}</p>
      <hr className="hidden" width="1"/>
    </section>
  );
}

