import {ReactComponent as AddToCard} from '../img/addToCard.svg'

function ProductItem( { id, title, imgUrl, text, price, main }) {
    
    return ( 
        <a className="catalog__link">
            <div className="item_catalog"> 
                <div className="item__photo__catalog">
                    <div className="hidden_text">
                    <AddToCard />
                    <p>Add to card</p>
                    </div>
                    <img className={id === 2 && main ? "photo_cat photo2" : "photo_cat"} src={imgUrl} alt="photo catalog"/>
                </div>
                <div className="discription">
                    <h2 className="title_item_catalog">{title}</h2>
                    <p className="text_item_catalog">{text}</p>
                    <h3 className="price">{price}</h3>
                </div>
            </div>
        </a>
     );
}

export default ProductItem;