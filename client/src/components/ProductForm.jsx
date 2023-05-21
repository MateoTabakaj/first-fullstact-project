import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const ProductForm = (props) => {

    const { initialTitle, initialPrice,initialDescription, onSubmitProp } = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);
    const navigate = useNavigate();

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({ title, price, description });
        window.location.reload()
        // navigate('/')
    }

    return (
    <div className='Form'>
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br />
                {/* When the user types in this input, our onChange synthetic event 
                    runs this arrow function, setting that event's target's (input) 
                    value (what's typed into the input) to our updated state   */}
                <input type="text" name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
            </p>
            <p>
                <label>Price</label><br />
                <input type="number" step={5} name='price' value={price} onChange={(e) => setPrice(e.target.value)} />
            </p>
            <p>
                <label>Description</label><br />
                <input type="text" name='description' value={description} onChange={(e)  => setDescription(e.target.value)} />
            </p>
            <input type="submit" />
        </form>
    </div>
    )
}
export default ProductForm;

