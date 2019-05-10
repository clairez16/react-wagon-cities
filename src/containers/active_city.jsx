import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActiveCity } from '../actions';

class ActiveCity extends Component {
  render() {
    if (this.props.activeCity == null) {
      return (<div className="active-city"></div>)
    } else {
      const source = `https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`
      return (
        <div className="active-city">
          <h3>{this.props.activeCity.name}</h3>
          <p>{this.props.activeCity.address}</p>
          <img src={source} alt=""/>
        </div>
      );
    }
  }

  componentWillMount() {
    this.props.setActiveCity()
  }
};

function mapDispatchToProps(dispatch) {
 return bindActionCreators(
  { setActiveCity: setActiveCity },
  dispatch
 );
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveCity);
