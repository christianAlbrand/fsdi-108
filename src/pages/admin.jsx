import { useState } from "react";
import "./styles/admin.css";


function Admin(){
    const [coupon, setCoupon] = useState({
        code:'', //not required
        discount:''
    });
    const [product, setProduct] = useState({
        title: "",
        vategory: "",
        image: "",
        price: ""
    })


    function handleCouponInput(e){
        const val = e.target.value;
        const name = e.target.name;

        let copy = {...coupon}

        if(name == "discount"){
            copy.discount = val;
        }else{
            copy.code = val;
        }

        setCoupon(copy);
    }

    function saveCoupon(){
        console.log(coupon);
    }

    function handleProductInput(e){
        const val = e.target.value;
        const name = e.target.name;

        console.log(name, val);

        let copy = {...product};
        copy[name] = val;
        setProduct(copy);
    }

    function saveProduct(){
        console.log(product)
    }

    //create a handleProductInput fn
    //should get the name and the val
    //should console log them
    //set the name and onChange to Product from input fields

    return(
        <div className="admin page">
            <h1>Store Administration</h1>
            <div className="parent">
                <div className="products form">
                    <h3>Create Products</h3>
                    <div className="products-container">
                        <div className="products-container-div">
                            <div className="mb-3">
                                <label className="form-label">Title</label>
                                <input type="text" className="form-control" onBlur={handleProductInput} name="title"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Category</label>
                                <input type="text" className="form-control" onBlur={handleProductInput} name="category"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Image</label>
                                <input type="image" className="form-control" onBlur={handleProductInput} name="image"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Price</label>
                                <input type="number" className="form-control" onBlur={handleProductInput} name="price"/>
                            </div>
                            <div className="mb-5">
                                <button onClick={saveProduct} className="btn btn-outline-dark"> Save Product </button>
                            </div>
                        </div>
                        <div className="img-create-products-container">
                            <div className="img-create-product">
                                <img src="https://t3.ftcdn.net/jpg/09/28/37/36/360_F_928373688_dOMFSg3yFxtXSkYKYEZymRyF37VABl9Q.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="coupons-container">
                    <div className="coupons form">
                        <h3>Create Coupons</h3>
                        <div className="mb-3">
                            <label className="form-label">Code</label>
                            <input type="text" className="form-control" onBlur={handleCouponInput} name="code"/>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Discount</label>
                            <input type="number" className="form-control" onBlur={handleCouponInput} name="discount"/>
                        </div>

                        <div className="mb-3 btn-container">
                            <button onClick={saveCoupon} className="btn btn-outline-dark">Save Coupon</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;