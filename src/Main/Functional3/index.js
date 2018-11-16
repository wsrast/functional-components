import React from 'react';
import PropTypes from 'prop-types';

const Functional3 = props => {
  return ( 
    <div>
      Hello from Functional3 and {props.name}!
    </div>
  )
};

Functional3.defaultProps = {
  name: '(Forgot the name)'
};

Functional3.propTypes = {
  name: PropTypes.string
};

export default Functional3;