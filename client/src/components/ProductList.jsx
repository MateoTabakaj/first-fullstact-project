import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './Delete';
const ProductList = (props) => {

    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res => setProduct(res.data));
    }, [])
    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id !== productId))
    }
    return (
        <div className='List'>
            {product.map((product, idx) => {
                return (
                    <div key={product}>
                        <Link to={"/product/" + product._id}>
                            <p value={idx}>
                                Title:  {product.title}<br />
                                Price:  {product.price}ALL<br />
                                Description:  {product.description}
                            </p>
                        </Link>
                        <Link to={"/edit/" + product._id}>
                            <button> Edit</button>
                        </Link>
                        <DeleteButton productId={product._id} successCallback={() => removeFromDom(product._id)} />
                    </div>
                )
            })}
        </div>
    )
}
export default ProductList;




