import React from 'react';
import { View, Text } from 'react-native';
import geolib from 'geolib';

export default class Details extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentPosition: null,
      error: null,
      reference: {
        latitude: 48.852399,
        longitude: 2.288411
      },
      distanceFromParis: null
    };
  }

  componentDidMount() {
    const component = this;
    const options = {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 1000
    };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const distance = geolib.getDistance(position.coords, component.state.reference, 10, 1);

        component.setState({
          currentPosition: position.coords,
          distanceFromParis: distance,
          error: null
        });
      },
      (error) => {
        this.setState({
          error: error.message
        });
      },
      options
    );
  }

  render() {
    const { params } = this.props.navigation.state;
    const name = (params) ? params.name : '';
    const latitude = (this.state.currentPosition) ? this.state.currentPosition.latitude : '';
    const longitude = (this.state.currentPosition) ? this.state.currentPosition.longitude : '';

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details! {name}</Text>
        <Text>Latitude : {latitude} </Text>
        <Text>Longitude : {longitude} </Text>
        <Text>Distance from Paris : {this.state.distanceFromParis} </Text>
        <Text>Error : {this.state.error} </Text>
      </View>
    );
  }
}