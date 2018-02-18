import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TabNavigator, TabBarBottom, StackNavigator} from 'react-navigation';
import TeamWall from "./app/TeamWall";
import Messages from "./app/Messages";
import NightCenter from "./app/NightCenter";
import Details from "./app/Details";

const TeamWallStack = StackNavigator(
  {
    TeamWall: {screen: TeamWall},
    Details: {screen: Details},
  },
  {
    initialRouteName: 'TeamWall',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
);

const MessagesStack = StackNavigator({
  Messages: { screen: Messages },
  Details: { screen: Details },
});

const NightCenterStack = StackNavigator({
  NightCenter: { screen: NightCenter },
  Details: { screen: Details },
});

export default TabNavigator(
  {
    TeamWall: { screen: TeamWallStack },
    Messages: { screen: MessagesStack },
    NightCenter: { screen: NightCenterStack },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'TeamWall') {
          iconName = `ios-people${focused ? '' : '-outline'}`;
        } else if (routeName === 'Messages') {
          iconName = `ios-chatbubbles${focused ? '' : '-outline'}`;
        } else if (routeName === 'NightCenter') {
          iconName = `ios-pulse${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);

/*export default class App extends React.Component {
  render() {
    return (

    );
  }
}*/


