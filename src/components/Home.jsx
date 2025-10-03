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
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await apiClient.get("/products"); // Axios GET Request
            setProducts(response.data); // Update products state with fetched data
        } catch (error) {
            setError(error.response?.data?.message || "Failed to fetch products. Please try again."); // Extract error message if available
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="home-container">
            <PageHeading title="Welcome to Our Website!">
                This the content sent by home going to be accessed as children by the child component "ie. PageHeading"
            </PageHeading>

            <ProductListings products={products}/>
        </div>
    )
}