import { useContext } from "react";
import "./styles/navbar.css"

import { Link } from "react-router-dom";
import GlobalContext from "../context/globalContext";

function Navbar(){

    const user = useContext(GlobalContext).user;
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">Online Store</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/catalog">Catalog</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/admin">Admin</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/about">About</Link>
                        </li>
                        <li className="navitem">
                            <Link class="nav-link active" aria-current="page" to="/list">Shopping List</Link>
                        </li>
                    </ul>
                    <div class="d-flex">
                        <div class="btn btn-outline-dark me-3">
                            {user.id} : {user.name}
                        </div>
                        <Link class="btn btn-success me-2" to="/cart">View cart</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;