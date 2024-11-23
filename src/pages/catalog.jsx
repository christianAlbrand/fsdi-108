import "./styles/catalog.css";
import Product from "../components/Product";
import { useEffect, useState } from "react";
import dataService from "../services/dataService";

function Catalog(){
    const [catalog, setCatalog] = useState([])
    const [categories, setCategories] = useState([])

    function loadData() {
        let productList = dataService.getProducts();
        let categoriesList = dataService.getCategories();
        setCatalog(productList);
        setCategories(categoriesList);
    }

    useEffect(function() {
        // when page loads
        loadData();
    }, []);
    // if catalog is empty
    if(!catalog.length) return "Loading...";

    return(
        <div className='content page'>
            <div>
                <h1>Food Catalog</h1>
            </div>

            <div className="filters">
                {categories.map(cate => <button className="btn btn-outline-primary">{cate}</button>)}
            </div>
            {/* map the categories into buttons */}

            <div>
                {catalog.map(prod => <Product data={prod}></Product>)}
            </div>
        </div>
    );
}

export default Catalog