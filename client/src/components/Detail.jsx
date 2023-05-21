import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import DeleteButton from './Delete';


const Detail = (props) => {
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

    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price} ALL</p>
            <p>Description: {product.description}</p>
            <DeleteButton productId={product._id} successCallback={() => navigate("/")} />
        </div>
    );
}
export default Detail;

