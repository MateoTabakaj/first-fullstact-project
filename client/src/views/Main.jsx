import React, { useState } from 'react'
import axios from 'axios';
import PersonForm from '../components/ProductForm';
import PersonList from '../components/ProductList';
const Main = (props) => {

    const [product, setProduct] = useState([]);

    return (
        <div className='Main'>
            <PersonForm product={product} setProduct={setProduct} />
            <h2>Products List</h2>
            <PersonList product={product} setProduct={setProduct} />
        </div>
    )
}
export default Main;
