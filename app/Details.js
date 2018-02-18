import React from 'react';
import { View, Text } from 'react-native';

export default class Details extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };


  }

  render() {
    const { params } = this.props.navigation.state;
    const name = (params) ? params.name : '';

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details! {name}</Text>
      </View>
    );
  }
}