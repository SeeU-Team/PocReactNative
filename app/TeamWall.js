import React from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import CarouselElement from "./CarouselElement";
import StatusBarBackground from "./StatusBarBackground";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <StatusBarBackground/>
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
            data={[
              {key: 1, size: 1200, name: 'Loft, Metropolis'},
              {key: 2, size: 400, name: 'Loft, Paris'},
              {key: 3, size: 750, name: 'Loft, Londres'},
              {key: 4, size: 230, name: 'Loft, Rome'},
              {key: 5, size: 500, name: 'Loft, Barcelone'},
              {key: 6, size: 970, name: 'Loft, Madrid'},
              {key: 7, size: 100, name: 'Loft, Los Angeles'},
            ]}
            renderItem={({item}) => <CarouselElement size={item.size} name={item.name}/>}
            horizontal={true}
            style={{flex: 1}}
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