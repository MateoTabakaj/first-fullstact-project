import React, { useState ,useEffect} from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
const Main = (props) => {

    const [productList, setProductList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res => {
                setProductList(res.data)
            })
            .catch((err) => console.log(err))
    }, [])
    const removeFromDom = productId => {
        axios.delete("http://localhost:8000/api/product/" + productId)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setProductList(productList.filter(person => person._id !== productId));
            })
            .catch((err) => console.log(err))

    }
    const createProduct = productParam => {
        axios.post('http://localhost:8000/api/product', productParam)
            .then(res => {
                console.log(res);
                console.log(res.data)
                setProductList([...productList, res.data])
            })
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription=""/>
            <hr />
            <h1>Product List</h1>
            <ProductList productList={productList} removeFromDom={removeFromDom} />
        </div>
    )
}
export default Main;
