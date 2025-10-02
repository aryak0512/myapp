import ProductCard from "./ProductCard.jsx";

export default function ProductListings({products}) {
    return (
        <div className="product-listings-container">
            <div className="product-listings-grid">

                {products.length > 0 ? products.map(product => (

                    <ProductCard key={product.id} product={product}/>

                )) : <p className="product-listings-empty">No products available</p>

                }
            </div>
        </div>
    )
}