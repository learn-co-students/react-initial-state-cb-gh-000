import React from 'react';

class Address extends React.Component {
  constructor(props) {
    super(props);

    // In this case, state should be avoided because it is storing computed values...
    // this.state = {
    //   fullAddress: `${props.street}, ${props.city}`
    // }
  }

  render() {
    return (
      <div className="address">
        // {this.state.fullAddress}
        {this.props.street}, {this.props.city}
      </div>
    );
  }
}

export default Address;
