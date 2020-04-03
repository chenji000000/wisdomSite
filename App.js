import React, {Component} from 'react';
import {Animated, BackHandler, Easing, Image, NetInfo, StatusBar, ToastAndroid} from 'react-native';
import StackRouteConfigs from './app/components/StackRouteConfigs'
import StackNavigatorConfigs from './app/components/StackNavigatorConfigs'
import Login from './app/pages/Login'
import PhoneLogin from './app/pages/Login/PhoneLogin'

import {
  createStackNavigator,
  createSwitchNavigator,
  createTabNavigator,
  NavigationActions,
  StackActions,
  TabBarTop,
} from 'react-navigation';

console.disableYellowBox = true;//去除黄屏警告

const Navigators = createStackNavigator(StackRouteConfigs, StackNavigatorConfigs);
const LoginPage = createStackNavigator({
  login: {
    screen: Login,
    navigationOptions: {
      header: null,
      gesturesEnabled: true,
    },
  },
  PhoneLogin:{
    screen:PhoneLogin,
    navigationOptions: {
      header: null,
      gesturesEnabled: true,
    },
  }
}, {initialRouteName: 'login'});

const SwitchNav = createSwitchNavigator({
  LoginPage: LoginPage,
  App: Navigators,
  },{
    initialRouteName: 'LoginPage',
  })

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <StatusBar backgroundColor='transparent' translucent={true} barStyle="light-content"/>
        <SwitchNav />
      </React.Fragment>
     
    )
  }
}