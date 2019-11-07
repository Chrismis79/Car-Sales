import React from 'react';
import AdditionalFeature from './AdditionalFeature';

import {connect} from 'react-redux';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.items.length ? (
        <ol type="1">
          {props.items.map(item => (
            <AdditionalFeature key={item.id} feature={item} buy={props.buy}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
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
  {})
  (AdditionalFeatures);
