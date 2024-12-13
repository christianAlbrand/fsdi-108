import "./styles/catalog.css";
import Product from "../components/Product";
import { useEffect, useState } from "react";
import dataService from "../services/dataService";


function Catalog(){
    const [catalog, setCatalog] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] =useState("")

    async function loadData() {
        let productList = await dataService.getProducts();
        let categoriesList = dataService.getCategories();
        setCatalog(productList);
        setCategories(categoriesList);
    }

    useEffect(function() {
        // when page loads
        loadData();
    }, []);

    function onCategorySelected(category){
        setSelectedCategory(category);
    }
    // if catalog is empty
    if(!catalog.length) return "Loading...";

    function clearFilter(){
        setSelectedCategory("");
    }


    return(
        <div className='content page'>
            <div className="border-header-buttons">
                <div>
                    <h1>Food Catalog</h1>
                </div>
                <div className="filters">
                    <button className="btn btn-sm btn-success" onClick={clearFilter}>Show All</button>
                    {categories.map(cate => <button onClick={() => onCategorySelected(cate)} key={cate} className="btn btn-primary">{cate}</button>)}
                </div>
                {/* map the categories into buttons */}
            </div>

            <div className="page">
                {catalog
                    .filter(prod => !selectedCategory || prod.category === selectedCategory)
                    .map(prod => <Product data={prod} key={prod._id}></Product>)}
            </div>
        </div>
    );
}

export default Catalog