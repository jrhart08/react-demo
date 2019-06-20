/* eslint-disable */
import React from 'react';

// better!
const Modal = ({ header, children, }) => (
  <div className="modal">
    <div className="modal-header">
      {header}
    </div>
    <div className="modal-body">
      {children}
    </div>
  </div>
);

// ...

<Modal header={<Header />}>
  <SomeModalBody />
</Modal>



