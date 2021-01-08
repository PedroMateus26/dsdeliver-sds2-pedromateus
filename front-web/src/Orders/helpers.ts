import { Product } from "./types"

export const checkIsSelect=(selectedProducts:Product[], product:Product)=>{
    return selectedProducts.some(item => item.id === product.id)
}

export const formatPrice=(price:number)=>{
    const formatter= new Intl.NumberFormat('pt-BR',{
        style:'currency',
        currency:'BRL',

    });
    return formatter.format(price);
}