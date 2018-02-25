import React from 'react';
import {View, ScrollView, FlatList, StyleSheet, Image} from 'react-native';
import CarouselElement from "./CarouselElement";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'TeamWall',
    headerTitle: (
      <Image
        source={require('../resources/logo.png')}
        resizeMode="contain"
        style={{height: 40}}
      />
    ),
  };

  constructor(props) {
    super(props);

    this.state = {
      data: [
        {key: 1, size: 1200, name: 'Loft, Metropolis'},
        {key: 2, size: 400, name: 'Loft, Paris'},
        {key: 3, size: 750, name: 'Loft, Londres'},
        {key: 4, size: 230, name: 'Loft, Rome'},
        {key: 5, size: 500, name: 'Loft, Barcelone'},
        {key: 6, size: 970, name: 'Loft, Madrid'},
        {key: 7, size: 100, name: 'Loft, Los Angeles'},
      ]
    };

    this.getNewData = this.getNewData.bind(this);
  }

  getNewData(info) {
    const currentData = this.state.data;
    let index = currentData.length + 1;

    console.log('coucou', info.distanceFromEnd, index - 1);

    for (let i = 0; i < 10 ; i++, index++) {
      currentData.push({key: index, size: 10 + index, name: 'Loft, ' + index});
    }
    this.setState({
      data: currentData
    });
  }

  render() {
    const component = this;
    return (
      <ScrollView style={styles.container}>
        {/*<StatusBarBackground/>*/}
        {/*<StatusBar
          backgroundColor="red"
          barStyle="light-content"
        />*/}

        <View style={{height: 60, backgroundColor: 'green'}}>
        </View>
        <View style={{height: 60, backgroundColor: 'black'}}>
        </View>
        <View style={styles.containerFlatList}>
          <FlatList
            data={this.state.data}
            renderItem={({item}) => <CarouselElement size={item.size} name={item.name} navigation={component.props.navigation}/>}
            horizontal={true}
            style={{flex: 1}}
            onEndReachedThreshold={0.2}
            onEndReached={this.getNewData}
          />
        </View>
        {/*<View style={{height: 250, backgroundColor: 'blue'}}>
        </View>
        <View style={{height: 250, backgroundColor: 'green'}}>
        </View>
        <View style={{height: 250, backgroundColor: 'red'}}>
        </View>*/}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // marginTop: Constants.statusBarHeight
    /* alignItems: 'center',
    justifyContent: 'center', */
  },
  containerFlatList: {
    flex: 1,
    backgroundColor: '#777'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});