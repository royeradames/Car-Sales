import React from 'react';
import { connect } from 'react-redux'
import {remove} from '../actions/carActionList'
const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() =>{ debugger;props.remove(props.feature) ;debugger;}}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps, {remove})(AddedFeature)