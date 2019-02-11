// Component Code Goes Here
import React form 'react';

export default class Address extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullAddress: `{this.props.steet}, {this.props.city}`
    }
  }

  render(){
    return (
      <div className="address">
      {this.state.fullAddress}
      </div>
    )
  }
}
