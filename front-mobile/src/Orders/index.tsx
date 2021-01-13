import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import OrderCard from '../OrderCard'

const Orders=()=>{
    return(
        <View style={styles.container}>
            <OrderCard/>
        </View>
    )
}

export default Orders;

const styles=StyleSheet.create({
    container:{
        paddingRight: '5%',
        paddingLeft: '5%'
    }
})