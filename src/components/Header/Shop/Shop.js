import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb } from '../../../utilities/fakedb';
import Cart from '../../Cart/Cart';
import useProducts from '../../Hooks/useProducts';
import Product from '../../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        console.log(product.id)
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link className='btnn-cart' to="/orders">Review order</Link >
                </Cart>
            </div>
        </div>
    );
};

export default Shop;