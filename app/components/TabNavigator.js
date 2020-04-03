import React from 'react';
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Message from '../pages/Message'
import Mine from '../pages/Mine'
import { Image } from 'react-native';

import {
    createTabNavigator,
    TabBarTop,
  } from 'react-navigation'

const TabRouteConfigs = { // 表示各个页面路由配置,让导航器知道需要导航的路由对应的页面
    Home: { //首页
      screen: Home, // 对应的路由页面
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '首页',
        tabBarIcon: ({focused}) => (
          <Image resizeMode='contain' source={focused ? require('../../assets/images/i_home_foc.png') : require('../../assets/images/i_home.png')}
                 style={{width: 20, height: 20}}
          />
        ),
      }),
    },
    Message: {//消息
      screen: Message,
      navigationOptions: { // 指定路由页面的配置选项
        tabBarLabel: '消息', // 可用作头部标提headerTitle ，或者Tab标题 tabBarLabel
        tabBarIcon: ({focused}) => (
          <Image resizeMode='contain' source={focused ? require('../../assets/images//i_video_foc.png') : require('../../assets/images//i_video.png')}
                 style={{width: 20, height: 20}}
          />
        ),
      },
    },
    Contact: {//通讯录
      screen: Contact,
      navigationOptions: { // 指定路由页面的配置选项
        tabBarLabel: '通讯录', // 可用作头部标提headerTitle ，或者Tab标题 tabBarLabel
        tabBarIcon: ({focused}) => (
          <Image resizeMode='contain' source={focused ? require('../../assets/images/i_live_foc.png') : require('../../assets/images/i_live.png')}
                 style={{width: 20, height: 20}}
          />
        ),
      },
    },
    Mine: {
      screen: Mine,
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon: ({focused}) => (
          <Image resizeMode='contain' source={focused ? require('../../assets/images/i_mine_foc.png') : require('../../assets/images/i_mine.png')}
                 style={{width: 20, height: 20}}
          />
        ),
      },
    },
  };

  const TabNavigatorConfigs = {
    initialRouteName: 'Home', // 初始显示的Tab对应的页面路由名
    tabBarComponent: TabBarTop, // Tab选项卡组件，TabBarBottom TabBarTop 两个值，在iOS中默认为 TabBarBottom ，在Android中默认为 TabBarTop
    tabBarPosition: 'bottom', // 设置选项卡的位置，在顶部或是底部，有top  bottom
    lazy: true, // 是否懒加载页面
    header: null,
    tabBarOptions: {
      activeBackgroundColor: '#1884CD',
      inactiveBackgroundColor: '#000000',
      activeTintColor: '#1884CD',
      inactiveTintColor: 'black',
      indicatorStyle: {backgroundColor: 'white'},//线颜色
      style: {backgroundColor: '#FFFFFF'},
      labelStyle: {fontSize: 10, margin: 0},
      IconStyle: {margin: 0},
      showIcon: true,
      pressOpacity: 1,
      tabStyle: {
        // backgroundColor: '#0C97E2',
      },
    }, // 在属性TabBarBottom与TabBarTop中有所不同
  };

  const Tab = createTabNavigator(TabRouteConfigs, TabNavigatorConfigs);

  export default Tab