import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Header from '../../components/Header'

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header centerText='首页'/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8'
    },
});