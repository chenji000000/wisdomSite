import React, { Component } from 'react'
import { View, StyleSheet, Image, FlatList,Dimensions } from 'react-native'
import Header from '../../components/Header'
import ScrollableTabView, {DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export default class Home extends Component {

    tabArr = [
        {columnName: '头条', requestCode: 'T1348647909107'},
        {columnName: '娱乐', requestCode: 'T1348648517839'},
        {columnName: '科技', requestCode: 'T1348649580692'},
        {columnName: '手机', requestCode: 'T1348649654285'},
        {columnName: '冰雪运动', requestCode: 'T1486979691117'},
        {columnName: '云课堂', requestCode: 'T1421997195219'},
        {columnName: '游戏', requestCode: 'T1348654151579'},
        {columnName: '旅游', requestCode: 'T1348654204705'},
        {columnName: '二次元', requestCode: 'T1481105123675'},
        {columnName: '轻松一刻', requestCode: 'T1350383429665'},
        {columnName: '体育', requestCode: 'T1348649079062'}
    ];

    render() {
        return (
            <View style={styles.container}>
                <Header centerText='首页'/>
                <View style={styles.container}>

                <View style={styles.columnSelect}>
                    <Image source={require('../../../assets/images/i_menu.png')} style={{width: 20, height: 20}} />
                </View>

                <ScrollableTabView
                    ref={'tabView'}
                    renderTabBar={() => <ScrollableTabBar style={{borderBottomWidth: 0, paddingBottom: 5, width: screenWidth* .9, height: 45}} />}
                    tabBarUnderlineStyle={{ height: 2, minWidth: Math.floor(screenWidth* .9/5), backgroundColor: 'rgba(216,30,6,.8)'}}
                    tabBarInactiveTextColor="#515151"
                    tabBarActiveTextColor="#d81e06"
                    tabBarTextStyle={{fontSize: 15}}
                    onChangeTab={(ref)=>{}}
                    onScroll={(postion)=>{}}
                    locked={false}
                    initialPage={0}
                >

                    {
                        this.tabArr.map(item => {
                            return (
                                <FlatList
                                    key={item.columnName}
                                    tabLabel={item.columnName}
                                    requestCode={item.requestCode}
                                    navigation={ this.props.navigation }
                                />
                            )
                        })
                    }

                </ScrollableTabView>

            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8'
    },
    columnSelect: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: screenWidth* .1,
        height: 50,
        top: 0,
        right: 0,
        /*shadowColor:'red',
        shadowOffset:{h:-10,w:-10},
        shadowRadius:3,
        shadowOpacity:1,*/
    }
});