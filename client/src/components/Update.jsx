import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {  useNavigate, useParams } from "react-router-dom";
import ProductForm from './ProductForm';
import DeleteButton from './Delete';
const Update = (props) => {
    
    
    const {id} = useParams(); 
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, [])
    const updateProduct = product => {
        axios.patch('http://localhost:8000/api/product/' + id, product)
            .then(res => console.log(res));
            navigate('/')

    }
    return (
        <div>
            <h1>Update a Product</h1>
            {loaded && 
                <>
                    <ProductForm
                        onSubmitProp={updateProduct}
                        initialTitle={product.title}
                        initialPrice={product.price}
                        initialDescription={product.description}
                        
                    />
                    <DeleteButton productId={product._id} successCallback={() => navigate('/')} />
                </>
            }
        </div>
    )
}
export default Update;

