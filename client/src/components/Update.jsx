import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { resolvePath, useNavigate, useParams } from "react-router-dom";
const Update = (props) => {
    const { id } = useParams(); //this process is identical to the one we used with our Details.js component
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const navigate = useNavigate();
    const { removeFromDom, product, setProduct } = props;

    // retrieve the current values for this person so we can fill
    // in the form with what is in the db currently
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
    }, [])
    const updateProduct = (e) => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/product/' + id, {
            title,    // this is shortcut syntax for firstName: firstName,
            price,
            description      // this is shortcut syntax for lastName: lastName
        })
            .then(res => {
                console.log(res);
                navigate("/"); // this will take us back to the Main.js
            })
            .catch(err => console.log(err))
    }

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId);
                
            })
            .then(resolvePath=>{
                navigate("/");
            })
            .catch(err => console.log(err))
            // window.location.reload(true)
    }

    return (
        <div>
            <h1>Update a Person</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label><br />
                    <input type="text"
                        name="Title"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="number"
                        name="Price"
                        step={5}
                        value={price}
                        onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text"
                        name="Description"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type="submit" />

            </form>
                <button onClick={(e) => { deleteProduct(product._id) }}>Delete</button>
        </div>
    )
}
export default Update;

