import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function AddProductModal() {
    const nav = useNavigate();
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        fetch(`http://localhost:3000/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                image: image,
                description: description,
                price: price,
            }),
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success');
                nav('/');
                toast.success("Product added successfully!");
            })
            .catch(error => {
                console.error('Error:', error);
                toast.error("Failed to add product.");
            });

        // Reset form fields
        setTitle('');
        setImage('');
        setDescription('');
        setPrice('');
    }

    return (
        <div>
            {/* Button to trigger modal */}
            <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#addProductModal"
            >
                Add Product
            </button>

            {/* Modal */}
            <div
                className="modal fade"
                id="addProductModal"
                tabIndex="-1"
                aria-labelledby="addProductModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addProductModalLabel">Add Product</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-container"> {/* Added form-container class */}
                                <form onSubmit={handleSubmit} className="form"> {/* Added form class */}
                                    <div className="form-group"> {/* Changed to form-group class */}
                                        <label htmlFor="title">Title</label>
                                        <input
                                            type="text"
                                            id="title"
                                            placeholder="Enter product title"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group"> {/* Changed to form-group class */}
                                        <label htmlFor="image">Image URL</label>
                                        <input
                                            type="text"
                                            id="image"
                                            placeholder="Enter image URL"
                                            value={image}
                                            onChange={(e) => setImage(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group"> {/* Changed to form-group class */}
                                        <label htmlFor="description">Description</label>
                                        <textarea
                                            id="description"
                                            placeholder="Enter product description"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group"> {/* Changed to form-group class */}
                                        <label htmlFor="price">Price</label>
                                        <input
                                            type="number"
                                            id="price"
                                            placeholder="Enter product price"
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="form-submit-btn w-100" data-bs-dismiss="modal"> {/* Added form-submit-btn class */}
                                        Add Product
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProductModal;