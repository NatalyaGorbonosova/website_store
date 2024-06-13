import {ReactComponent as AddToCard} from '../img/addToCard.svg';
import React, { useContext } from "react";

import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

function ProductItem( { id, title, imgUrl, text, price, main }) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart({id}));
    }
    
    return ( 
        <a className="catalog__link">
            <div className="item_catalog"> 
                <div className="item__photo__catalog" >
                    <div className="hidden_text" onClick={handleAddToCart}>
                    <AddToCard />
                    <p>Add to card</p>
                    </div>
                    <img className={id === 2 && main ? "photo_cat photo2" : "photo_cat"} src={imgUrl} alt="photo catalog"/>
                </div>
                <div className="discription">
                    <h2 className="title_item_catalog">{title}</h2>
                    <p className="text_item_catalog">{text}</p>
                    <h3 className="price">$ {price.toFixed(2)}</h3>
                </div>
            </div>
        </a>
     );
}

export default ProductItem;