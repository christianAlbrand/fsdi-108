import { useState } from "react";
import GlobalContext from "./globalContext";

function GlobalProvider(props){
    const [cart, setCart] = useState([])
    const [user, setUser] = useState({name: "Christian", id: 123456789})

    function addToCart(prod){
        let copy = [...cart]
        copy.push(prod);
        setCart(copy);
    }

    function removeFromCart(){
        console.log("Removing from cart...")
    }

    function clearCart(){
        console.log("Cart Cleared!")
    }

    return(
        <GlobalContext.Provider value={{
            cart: cart,
            user: user,
            addToCart: addToCart,
            removeFromCart: removeFromCart,
            clearCart: clearCart,
        }}>
            {props.children}
        </GlobalContext.Provider>
    );
}

export default GlobalProvider;