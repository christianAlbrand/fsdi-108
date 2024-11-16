import "./styles/about.css"
import { useState } from "react";

function About(){

    const [visibleEmail, setVisibleEmail] = useState(false);

    function showEmail(){
        setVisibleEmail(true);
    }

    return(
        <div className="about">
            <h3>About us</h3>
            <div className="box">
                <h2>Christian Albrand Aguirre</h2>
                {visibleEmail ? <h5>christian.albrandaguirre@cesunbc.edu.mx</h5> : <label>Click the button to see my email</label>}
                <br/>
                {
                    !visibleEmail
                        ? <button onClick={showEmail} className="btn btn-outline-primary">Show Email</button>
                        : null
                }
            </div>
        </div>
    );
}

export default About;