import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateActiveCity } from '../actions';

class City extends Component {
  handleClick = () => {
    this.props.updateActiveCity(this.props.city)
  }

  render() {
    return (
      <div className="list-group-item" onClick={this.handleClick}>
        {this.props.city.name}
      </div>
    );
  }
};

function mapDispatchToProps(dispatch) {
 return bindActionCreators(
 { updateActiveCity: updateActiveCity },
 dispatch
 );
}

export default connect(null, mapDispatchToProps)(City);
