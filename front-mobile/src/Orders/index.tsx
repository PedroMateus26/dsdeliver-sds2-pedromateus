import React, { useEffect, useState } from "react";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, ScrollView, Image, Alert } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { fetchOrders } from "../api";
import OrderCard from "../OrderCard";
import { Order } from "../types";

const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const isFocused=useIsFocused();

  const fetchData=()=>{
    setIsLoading(true);
    fetchOrders()
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => Alert.alert("Ocorreu erros ao listar pedidos"))
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    if(isFocused){
        fetchData();
    }
  }, []);

  const handleOnPress = (order:Order) => {
    navigation.navigate("OrderDetails",{
        order
    });
  };

  return (
    <ScrollView style={styles.container}>
      {isLoading ? (
        <Text>Carregando pedidos</Text>
      ) : (
        orders.map((order) => {
          <TouchableWithoutFeedback 
          key={order.id}
          onPress={()=>handleOnPress(order)}
          >
            <OrderCard order={order} />
          </TouchableWithoutFeedback>;
        })
      )}
    </ScrollView>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {
    paddingRight: "5%",
    paddingLeft: "5%",
  },
});
