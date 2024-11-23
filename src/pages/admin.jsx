import "./styles/admin.css";


function Admin(){
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
                                <input type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Category</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Image</label>
                                <input type="image" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Price</label>
                                <input type="number" className="form-control" />
                            </div>
                            <div className="mb-5">
                                <button className="btn btn-outline-dark"> Save Product </button>
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
                            <input type="text" className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Discount</label>
                            <input type="number" className="form-control" />
                        </div>

                        <div className="mb-3 btn-container">
                            <button className="btn btn-outline-dark">Save Coupon</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;