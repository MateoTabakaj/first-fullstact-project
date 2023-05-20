import React, { useState } from 'react'
import axios from 'axios';
import PersonForm from '../components/ProductForm';
import PersonList from '../components/ProductList';
const Main = (props) => {

    const [product, setProduct] = useState([]);
    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id != productId));}
    return (
        <div className='Main'>
            <h2>Product Manager</h2>
            <PersonForm product={product} setProduct={setProduct} />
            <h2>Products List</h2>
            <PersonList product={product} setProduct={setProduct} emoveFromDom={removeFromDom} />
        </div>
    )
}
export default Main;
