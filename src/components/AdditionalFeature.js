import React from 'react';
import {connect} from 'react-redux';
import {buyItem} from '../actions';


const AdditionalFeature = props => {
  console.log('additional features props: ',props)
  const addItem = item => {
    return props.buyItem(item);
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => addItem(props.feature)}className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
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
  {buyItem}
)(AdditionalFeature);
