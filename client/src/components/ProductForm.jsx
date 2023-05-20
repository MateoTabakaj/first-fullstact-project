import React, { useState } from 'react'
import axios from 'axios';
const ProductForm = (props) => {
    const {product, setProduct} = props; //this is new
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title,    
            price,
            description   
        })
            .then(res=>{
                console.log(res); 
                console.log(res.data);
                // we will update the lifted state of our people array 
                //    to include the current value in state plus the single 
                //    new object created and returned from our post request. 
                setProduct([...product, res.data]); //this is new
            })
            .catch(err=>console.log(err))
    }   

    return (
    <div className='Form'>
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br />
                {/* When the user types in this input, our onChange synthetic event 
                    runs this arrow function, setting that event's target's (input) 
                    value (what's typed into the input) to our updated state   */}
                <input type="text" onChange={(e) => setTitle(e.target.value)} />
            </p>
            <p>
                <label>Price</label><br />
                <input type="number" step={5} onChange={(e) => setPrice(e.target.value)} />
            </p>
            <p>
                <label>Description</label><br />
                <input type="text" onChange={(e) => setDescription(e.target.value)} />
            </p>
            <input type="submit" />
        </form>
    </div>
    )
}
export default ProductForm;

