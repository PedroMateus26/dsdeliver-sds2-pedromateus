import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Alert, Linking } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import OrderCard from "../OrderCard";
import { Order } from "../types";
import {confirmDelivery} from '../api'
import Header from "../Header";

type Props={
    route:{
        params:{
            order:Order
        }
    }
}

const OrderDetails = ({route}:Props) => {
  const navigation = useNavigation();
  const {order}=route.params
  
  const handleOnCancel = () => {
    navigation.navigate("Orders");
  };

  const handleConfirmDelivery = () => {
    confirmDelivery(order.id)
    .then(()=>{
      Alert.alert(`Pedido ${order.id} confirmado com sucesso`); 
      navigation.navigate("Orders"); 
    })
    .catch(()=>{
        Alert.alert(`Houve erro ao confirmar pedido ${order.id}`); 
    });
  };

  const handleStartNavigation = () => {
    Linking.openURL(`https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${order.latitude},${order.longitude}`)
  };
  return (

    <>
      <Header />
      <View style={styles.container}>
        <OrderCard order={order}/>
        <RectButton style={styles.button} >
            <Text style={styles.buttonText} onPress={handleStartNavigation}>INICIAR NAVEGAÇÃO</Text>
        </RectButton>
        <RectButton style={styles.button} >
            <Text style={styles.buttonText} onPress={handleConfirmDelivery}>CONFIRMAR ENTREGA</Text>
        </RectButton>
        <RectButton style={styles.button}>
            <Text style={styles.buttonText} onPress={handleOnCancel}>CANCELAR</Text>
        </RectButton>
      </View>
      </>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
    container: {
      paddingRight: '5%',
      paddingLeft: '5%',
    },
    button: {
      backgroundColor: '#DA5C5C',
      flexDirection: 'row',
      borderRadius: 10,
      marginTop: 40,
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonText: {
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 50,
      paddingRight: 50,
      fontWeight: 'bold',
      fontSize: 18,
      color: '#FFF',
      letterSpacing: -0.24,
      fontFamily: 'OpenSans_700Bold'
    }
  });
