import './ProductItem.css';

function ProductItem(props) {
    const { product, onProductClick } = props;
    return (
        <div className="image-item">
            <img src= {product.thumnailUrl} onClick={() => {onProductClick(product)}} />
            <h4>{product.title}</h4>
        </div>
    )
}

export default ProductItem;