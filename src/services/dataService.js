import axios from "axios";

var catalog = [
    {
        "title": "Strawberry",
        "category": "Fruit",
        "price": 16.93,
        "image":"/images/2-straw-1024x1024.png",
        "_id":"2947"
    },
    {
        "title": "Cabbage",
        "category": "Vegetable",
        "price": 11.37,
        "image":"/images/green-cabbage.jpg",
        "_id":"94787"
    },
    {
        "title": "Bannana",
        "category": "Fruit",
        "price": 4.32,
        "image":"https://m.media-amazon.com/images/I/71WMcK0ASeL.jpg",
        "_id":"12345"
    },
    {
        "title": "Carrot",
        "category": "Vegetable",
        "price": 6.12,
        "image":"https://www.collinsdictionary.com/images/full/carrot_125262134.jpg",
        "_id":"67890"
    },
    {
        "title": "Apple",
        "category": "Fruit",
        "price": 5.21,
        "image":"https://thefreshandnatural.com/wp-content/uploads/2020/05/APPLE-GALA-KG.jpg",
        "_id":"12310"
    },
    {
        "title": "Tomato",
        "category": "Vegetable",
        "price": 10.11,
        "image":"https://www.kingsseeds.co.nz/cdn/shop/products/V8332-1.png?v=1688022712",
        "_id":"77723"
    },
    {
        "title": "Orange",
        "category": "Fruit",
        "price": 8.72,
        "image":"https://www.fervalle.com/wp-content/uploads/2022/07/transparent-orange-apple5eacfeae85ac29.7815306015883956945475.png",
        "_id":"62916"
    },
    {
        "title": "Corn",
        "category": "Vegetable",
        "price": 3.90,
        "image":"https://s30386.pcdn.co/wp-content/uploads/2019/08/FreshCorn_HNL1309_ts135846041.jpg.optimal.jpg",
        "_id":"71343"
    },
    {
        "title": "Pineapple",
        "category": "Fruit",
        "price": 15.21,
        "image":"https://www.collinsdictionary.com/images/full/pineapple_124985672.jpg",
        "_id":"99234"
    },
    {
        "title": "Garlic",
        "category": "Vegetable",
        "price": 1.23,
        "image":"https://www.veggycation.com.au/siteassets/veggycationvegetable/garlic.jpg",
        "_id":"64435"
    }
];

var categories = ['Fruit', 'Vegetable']

class DataService {
    async getProducts() {
        // todo: call the server to retrieve products
        let response = await axios.get("http://127.0.0.1:5000/api/products");
        return response.data;
        // hardcode values
        //return catalog;
    }

    async getCoupons(){
        let response = await axios.get("http://127.0.0.1:5000/api/coupons")
        return response.data
    }

    getCategories(){
        // todo: call the server

        // hardcoded values
        return categories;
    }

    async saveProduct(product){
        let response = await axios.post("http://127.0.0.1:5000/api/products", product);
        return response.data;
    }

    async saveCoupon(coupon){
        let response = await axios.post("http://127.0.0.1:5000/api/coupons", coupon)
        return response.data;
    }
}

export default new DataService();