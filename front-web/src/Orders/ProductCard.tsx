import {ReactComponent as Pizza} from './pizza.svg'
import { Product } from './types';

type Props={
    product:Product;
}

const formatPrice=(price:number)=>{
    const formatter= new Intl.NumberFormat('pt-BR',{
        style:'currency',
        currency:'BRL',

    });
    return formatter.format(price);
}

const ProductCard = ({product}:Props) => {
  return (
    <div className="order-card-container">
      <h3 className="order-card-title">{product.name}</h3>
      <img src={product.imageUri} alt={product.name} className="order-card-image"/>
      <h3 className="order-card-title">{formatPrice(product.price)}</h3>
      <h3 className="order-card-title">
        Descrição
        <p>{product.description}.</p>
      </h3>
    </div>
  );
};

export default ProductCard;
