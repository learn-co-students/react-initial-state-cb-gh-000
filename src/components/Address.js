import React from 'react';

class Address extends React.Component{
  constructor(prop){
      super();
      this.state = {
        fullAddress: `${prop.street} , ${prop.city}`
      }
  }
  
  render(){
    return(
      <div className="address">
        {this.state.fullAddress}
      </div>
    );
  }
}

export default Address;