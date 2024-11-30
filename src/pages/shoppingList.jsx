import "./styles/shoppingList.css";
import { useState } from "react";

function ShoppingList(){

    const [itemName, setItemName] = useState("")
    const [itemList, setItemList] = useState([]);

    function handleInputChange(e){
        const text = e.target.value;
        setItemName(text);
    }



    function addItem(){
        console.log(itemName);
        var copy = [...itemList];
        copy.push(itemName);
        setItemList(copy);
    }

    return(
        <div className="list page">
            <h1>Build your shopping List</h1>

            <div className="form">
                <input type="text" placeholder="Add items to your list" onBlur={handleInputChange} />
                <button onClick={addItem} className="btn btn-sm btn-success">Add</button>
            </div>
            <div className="items">
                <label> You have total of {itemList.length} items in your list</label>

                <ul>
                    {itemList.map((list, index) => <li key={index}>{list}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default ShoppingList;