import React, { Component } from 'react'
import {Text, View, TouchableOpacity, StyleSheet, Image, TextInput, Dimensions} from 'react-native'
import { isLT19 } from '../../utils/ScreenUtil'
import { InputItem, Checkbox} from 'antd-mobile-rn';

const { width } = Dimensions.get('window');

export default class Login extends Component {
    submitgo() {
        
        this.props.navigation.navigate('App')
    }

    handleInput(k, v) {
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity style={{marginRight: 10}} onPress={() => this.props.navigation.push('PhoneLogin')}>
                        <Text style={{color: 'white', fontSize: 15}}>短信验证通过</Text>
                    </TouchableOpacity>
                </View>
                <Image source={require('../../../assets/images/i_user.jpg')} style={styles.iconStyle} resizeMode={'contain'}/>
                {/*账号和密码*/}
                <View style={styles.inputStyle}>
                    <View style={styles.inputUserStyle}>
                        <Image source={require('../../../assets/images/login-username.png')} style={{width: 20, left: 8}} resizeMode='contain'/>
                        <InputItem placeholder="账号" onChange={(v) => this.handleInput('user', v)} style={{width: '85%', borderBottomWidth:0}}/>
                    </View>
                    <View style={styles.inputPassStyle}>
                        <Image source={require('../../../assets/images/login-password.png')} style={{width: 20, left: 8}} resizeMode='contain'/>
                        <InputItem placeholder="密码" onChange={(v) => this.handleInput('pass', v)} style={{width: '85%', borderBottomWidth:0}}/>
                    </View>
                    
                </View>
                <View style={styles.forgetPassStyle}>
                    <TouchableOpacity onPress={() => this.submitgo()}  style={{flexDirection: 'row', marginLeft:32}}>
                        {/* <Checkbox /> */}
                        <Text style={{color: '#909399', fontSize: 12}}>记住用户名</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.submitgo()}  style={{marginRight:32}}>
                        <Text style={{color: '#909399', fontSize: 12}}>忘记密码</Text>
                    </TouchableOpacity>
                </View>
                
                <TouchableOpacity onPress={() => this.submitgo()}  style={styles.loginin}>
                    <Text style={{color: 'white', fontSize: 14}}>登录系统</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF' 
    },
    headerContainer: {
        flexDirection: 'row',
        backgroundColor: '#0A60FB',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 70,
        paddingTop: isLT19()?0:25
    },
    iconStyle: {
        width:64,
        height:64,
        marginTop:40,
        borderRadius:32,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    inputStyle:{
        marginTop:40,
        alignSelf: 'center', 
        backgroundColor:'white',
        width:width - 64,
        height:84,
        borderWidth:1,
        borderColor: '#DCDFE6',
        borderRadius: 4,
    },
    inputUserStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 42,
        borderBottomWidth:0.5,
        borderBottomColor:'#DCDFE6'
    },
    inputPassStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    forgetPassStyle: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        height: 52,
    },
    loginin: {
        top: 0,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: width - 64,
        backgroundColor: '#007AFF',
        borderRadius: 5,
        textAlign: 'center',
        height: 40,
      },
    });
