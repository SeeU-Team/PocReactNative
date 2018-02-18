import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';

export default class CarouselElement extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onPress = () => {
    this.props.navigation.navigate('Details', {
      name: this.props.name,
    });
  };

  render(){
    return(
      <TouchableOpacity onPress={this.onPress}>
        <View style={styles.container}>
          <ImageBackground
            source={require('../resources/loft_metropolis.jpg')}
            resizeMode="cover"
            style={{height: 200, width: 200}}
          >
            <Text style={styles.textOnImage}>#YOUNG #WILD #FREE</Text>
            <Text style={styles.textOnImage}>{this.props.size} max</Text>
          </ImageBackground>
          <View style={styles.footer}>
            <View style={{flex: 1}}>
              <Text style={styles.name}>{this.props.name}</Text>
            </View>
            <View style={{width: 40, alignItems: 'flex-end'}}>
              <Text style={styles.distance}>12 km</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  textOnImage: {
    color: 'white',
    paddingLeft: 7
  },
  image: {
    backgroundColor: 'transparent',
  },
  footer: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 7,
    paddingRight: 7,
  },
  name: {
    fontSize: 20
  },
  distance: {
    fontSize: 12,
  }
});