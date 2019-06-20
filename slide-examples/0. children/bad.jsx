/* eslint-disable */
import React from 'react';

// bad!
const Modal = ({ header, body }) => (
  <div className="modal">
    <div className="modal-header">
      {header}
    </div>
    <div className="modal-body">
      {body}
    </div>
  </div>
);

// ...

<Modal header={<Header />} body={<SomeModalBody />} />



