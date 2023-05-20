import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";



const Detail = (props) => {
    const { removeFromDom} = props;
    const navigate = useNavigate();

    const [product, setProduct] = useState({})
    const {id} = useParams(); 
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then( res => {
                console.log(res.data);
                setProduct(res.data);
                // navigate("/"); // this will take us back to the Main.js

            })
            .catch( err => console.log(err) );
    }, []);

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                navigate("/");
                removeFromDom(productId);
                 // this will take us back to the Main.js

            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price} ALL</p>
            <p>Description: {product.description}</p>
            <button onClick={(e) => { deleteProduct(product._id) }}>Delete</button>

        </div>
    );
}
export default Detail;

