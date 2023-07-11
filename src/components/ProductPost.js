import './ProductPost.css';

function ProductPost(props) {
    const { product, onBgClick } = props;
    return (
        <div className="product-post">
            <div className="product-post-bg" onClick={onBgClick} />
            <div className="product-post-content">
                <img src={product.fullUrl} />
                <h4>{product.title}</h4>
            </div>
        </div>
    )
}

export default ProductPost;