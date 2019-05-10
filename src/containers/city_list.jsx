import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';

import City from './city.jsx';

class CityList extends Component {
  render() {
    return (
      <div className="cities">
        {this.props.cities.map(city => <City city={city}/>)}
      </div>
    );
  }

  componentWillMount() {
    this.props.setCities()
  }
};

function mapDispatchToProps(dispatch) {
 return bindActionCreators(
 { setCities: setCities },
 dispatch
 );
}

function mapStateToProps(state) {
 return {
 cities: state.cities
 };
}


export default connect(mapStateToProps, mapDispatchToProps)(CityList);
