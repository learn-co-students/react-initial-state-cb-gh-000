import React from 'react';
import ReactDOM from 'react-dom';
import ToggleButton from './components/ToggleButton';
import Address from './components/Address';

ReactDOM.render(
  <ToggleButton />,
  document.getElementById('root')
)


ReactDOM.render(
  <Address
    street= 'street 1'
    city= 'bangalore'
  />,
  document.getElementById('root').appendChild(document.createElement('div'))
);
