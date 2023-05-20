import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const ProductList = (props) => {
    /* We deconstruct getter and setter which were passed down 
    via props by the parent component (app.js) to our child 
    component (PersonList.js). Now we can easily use the getter 
    and setter without having to write props.getter or props.setter every time: */
    const { removeFromDom, product, setProduct } = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // const { removeFromDom, product, setProduct } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
            window.location.reload(true)
    }

    return (
        <div className='List'>
            {
                product.length >= 0 && product.map((product, index) => {
                    return (
                        <div className='Items' key={index}>
                            <p>{product.title}</p>
                            <p>{product.price} ALL</p>
                            <p>{product.description}</p>
                            <Link to={`/product/${product._id}`}> {product.title}'s Page! </Link>
                            <Link to={"/edit/" + product._id}>Edit</Link>
                            <button onClick={(e) => { deleteProduct(product._id) }}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ProductList;




