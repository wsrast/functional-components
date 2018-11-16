import React from 'react';

const Functional2 = props => {
  return ( 
    <div>
      Hello from Functional2 and {props.name}!
      <br/>
      this: {this}
    </div>
  )
};

export default Functional2;