import PageHeading from "./PageHeading.jsx";
import ProductListings from "./ProductListings.jsx";

import {useEffect, useState} from "react";
import apiClient from "../api/apiClient.js";

export default function Home() {

    // hooks
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Run once when the component mounts
    // Mounting is the process of creating and adding the component into DOM
    // useEffect hook is used to perform external synchronous operations like data fetching from backend systems
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await apiClient.get("/products"); // Axios GET Request
            setProducts(response.data); // Update products state with fetched data
        } catch (error) {
            setError(error.response?.data?.message || "Failed to fetch products. Please try again!"); // Extract error message if available
        } finally {
            setLoading(false);
        }
    };

    if (loading) {

        return (
            <div className="spinner-border text-secondary" role="output">
                <span className="visually-hidden">Loading...</span>
            </div>
        )

    }

    if (error) {
        return <div className="error">{error}</div>
    }

    return (
        <div className="max-w-[1152px] mx-auto px-6 py-8">
            <PageHeading title="Welcome!">
                Add a touch of creativity to your space with our wide range of fun and
                unique stickers. Perfect for any occasion!
            </PageHeading>
            <ProductListings products={products}/>
        </div>
    )
}