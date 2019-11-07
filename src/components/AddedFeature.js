import React from 'react';
import {connect} from 'react-redux';
import {removeFeature} from '../actions';

const AddedFeature = props => {
  const removeItem = item => {
    return props.removeFeature(item);
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={()=> removeItem(props.feature)}className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    features: state.car.features,
    items: state.items
  };  
};
export default connect(
 
  mapStateToProps,
  {removeFeature}
)(AddedFeature);
