import axios from "axios"


const API_URL='https://pedromateus-sds2-dsdeliver.herokuapp.com'

export const fetchOrders=()=>{
    return axios(`${API_URL}/orders`)
}

export const confirmDelivery=(orderId:number)=>{
    return axios.put(`${API_URL}/orders/${orderId}/delivered`)
}