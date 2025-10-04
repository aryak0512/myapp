import Dropdown from "./Dropdown.jsx";
import ProductCard from "./ProductCard.jsx";
import SearchBar from "./SearchBar.jsx";
import {useMemo, useState} from "react";

export default function ProductListings({products}) {

    // hooks
    const [searchText, setSearchText] = useState("");
    const [sortBy, setSortBy] = useState("Price: Low to High");

    // useMemo hook : used for caching results and avoid expesnive calculations on every render
    // results are cached until dependencies change
    // it expects a compute function and an array of dependencies

    const filteredProducts = useMemo(() => {

        // Filter products based on search text - on first time loading nothing will be filtered
        let filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchText.toLowerCase()) ||
            product.description.toLowerCase().includes(searchText.toLowerCase())
        );

        return filteredProducts.sort((a, b) => {

            if (sortBy === "Price: Low to High") {
                return a.price - b.price; // low to high
            } else if (sortBy === "Price: High to Low") {
                return b.price - a.price; // high to low
            } else if (sortBy === "Popularity") {
                return b.popularity - a.popularity; // most popular first
            }

        });

    }, [products, searchText, sortBy]);


    // stubbed for now
    const sortOptions = ["Price: Low to High", "Price: High to Low", "Popularity"];

    function handleSearchChange(searchValue) {
        setSearchText(searchValue);
    }

    function handleSortChange(sortByKey) {
        console.log("Sort by parameter changed :", sortBy);
        setSortBy(sortByKey);
    }


    return (

        <div className="max-w-[1152px] mx-auto">

            {/*Search bar and dropdown components in an inner container*/}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 py-12">
                <SearchBar label="Search" placeholder="Find here..." value={searchText}
                           handleSearch={(searchValue) => handleSearchChange(searchValue)}/>
                <Dropdown label="Sort by" options={sortOptions} selectedValue={sortBy}
                          handleSortChange={(sortBy) => handleSortChange(sortBy)}/>
            </div>


            <div className="max-w-[1152px] mx-auto">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 py-12">

                    {filteredProducts.length > 0 ? filteredProducts.map(product => (

                        <ProductCard key={product.id} product={product}/>

                    )) : <p className="product-listings-empty">No products available</p>

                    }
                </div>
            </div>

        </div>
    )
}