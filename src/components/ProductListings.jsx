import Dropdown from "./Dropdown.jsx";
import ProductCard from "./ProductCard.jsx";
import SearchBar from "./SearchBar.jsx";

export default function ProductListings({products}) {

    // stubbed for now
    const sortOptions = ["Price: Low to High", "Price: High to Low", "Newest Arrivals"];
    
    return (

        <div className="max-w-[1152px] mx-auto">

            {/*Search bar and dropdown components in an inner container*/}

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-12">
                <SearchBar label="Search" placeholder="Find here..." value=""/>
                <Dropdown label="Sort by" options={sortOptions} selectedValue={sortOptions[0]}/>
            </div>


            <div className="product-listings-container">

                <div className="product-listings-grid">

                    {products.length > 0 ? products.map(product => (

                        <ProductCard key={product.id} product={product}/>

                    )) : <p className="product-listings-empty">No products available</p>

                    }
                </div>
            </div>

        </div>
    )
}