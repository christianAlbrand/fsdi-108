import { Link } from "react-router-dom";
import "./styles/home.css";

function Home(){
    return(
        <div className="home page">
            <div className="relative">
                <img className="main-img" src="./images/nature-bckgr.jpg" alt="" />
                <div className="over-img-welcome">
                    <h1>Welcome to Green Nature Home page!</h1>
                </div>
                <div className="over-img-txt">
                    <h2>Taste The Pure Nature Form</h2>
                </div>
            </div>
            <div className="catalog-home-description">
                <img className="catalog-img" src="./images/catalog-img.jpg" alt="" />
                <div className="welcome-p-linkBtn-container">
                    <p>We sell a variety of vegetables and fruits, go check our catalog!</p>
                    <Link className="btn btn-success" to="/catalog">Click here to go to catalog page!</Link>
                </div>
            </div>
        </div>
    );
}

export default Home