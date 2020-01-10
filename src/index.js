import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line
import ToggleButton from './components/ToggleButton';
import Address from './components/Address';

ReactDOM.render(
  <div>
    <Address
      street="Santa Monica Blvd."
      city="Santa Monica"
    />,
  </div>,
  document.getElementById('root')
)
