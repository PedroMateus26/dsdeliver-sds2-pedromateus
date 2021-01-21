export type Order={
    id:number,
    address:string,
    latitude:number,
    longitude:number,
    moment:string,
    state:string,
    products:Product[],
    total:number
}

export type Product={
    id:number,
    name:string,
    price:number,
    description:string,
    imgUrl:string
}