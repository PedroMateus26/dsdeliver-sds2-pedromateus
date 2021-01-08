import { formatPrice } from './helpers';
import { Product } from './types';

type Props={
    product:Product,
    onSelectProduct:(product:Product)=>void,
    isSelected:boolean
}



const ProductCard = ({product,onSelectProduct,isSelected}:Props) => {
  return (
    <div className={`order-card-container ${isSelected? 'selected':''}`} 
    onClick={()=>onSelectProduct(product)}
    >
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
