import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';

function ProductDetails() {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setImage(data.image);
                setTitle(data.title);
                setDescription(data.description);
                setPrice(data.price);
            })
            .catch((error) => console.error('Error fetching product:', error));
    }, [id]);

    return (
        <div className="container mt-4">
            <div className="row">
                {/* Left Column - Product Image */}
                <div className="col-md-6 text-center">
                    <img 
                        src={image} 
                        alt={title} 
                        className="img-fluid" 
                        style={{ maxHeight: '400px', objectFit: 'contain' }} 
                    />
                </div>

                {/* Right Column - Product Details */}
                <div className="col-md-6">
                    <h1 className="mb-3">{title}</h1>
                    <h3 className="text-primary mb-3">Price: ${price}</h3>
                    <p className="mb-4">{description}</p>

                    {/* Product Details Section */}
                    <div className="mb-3">
                        <h5>Product Details</h5>
                        <ul className="list-unstyled">
                            <li><strong>product status:</strong> Available</li>
                            <li><strong>Manufacture:</strong> MUSSA Electronics</li>
                            <li><strong>Model:</strong>MADE IN USA </li>
                        </ul>
                    </div>

                   
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
