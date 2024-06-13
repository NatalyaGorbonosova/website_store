
import Footer from "./footer";
import Header from "./header";
import { Link } from "react-router-dom";
import { cartItemsData } from "./productsData";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  updateCartItemQuantity,
  clearCart,
} from "../redux/cartSlice";
import { useEffect, useState } from "react";

const  CartPage = () => {
      
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      const product = cartItemsData.find((product) => product.id === item.id);
      if (product) {
        total += product.price * item.quantity;
      }
    });
    setTotalPrice(total);
    console.log(total);
  }, [cartItems]);

  const handleQuantityChange = (event, productId) => {
    
    const newQuantity = parseInt(event.target.value);
    dispatch(updateCartItemQuantity({ id: productId, quantity: newQuantity }));
  };

  const handleRemoveItem = (productId) => {
    
    dispatch(removeFromCart({ id: productId }));
  };

  const handleClearCart = () => {
    
    dispatch(clearCart());
  };


    return ( 
        <>
            <Header />
            <main>
            <div className="cart-content center">
                <div className="cart-content__left">
                    <div className="cart-content__list">
                        {cartItems.length === 0 ? (
                            <h2>Your cart is empty</h2>
                        ) : (
                        cartItems.map((item) => {
                            const product = cartItemsData.find((product) => product.id === item.id);
                            if (product) {
                                return(
                                    <div className="cart-content__card" key={item.id}>
                                    <img class="cart-content__img" src={product.img} alt="photo" />
                                    <div class="cart-content__description">
                                    <h2 class="cart-content__title">{product.title}</h2>
                                    <div class="cart-content__text-box">
                                        <p class="cart-content__text">Price: <span class="cart-content__text_pink">${product.price.toFixed(2)}</span></p>
                                        <p class="cart-content__text">Color: <span class="cart-content__text_grey">{product.color}</span></p>
                                        <p class="cart-content__text">Size: <span class="cart-content__text_grey">{product.size}</span></p>
                                        <label
                                          htmlFor="quantity"
                                          className="cart-content__text"
                                          >Quantity:</label>
                                        
                                        <input 
                                          id="quantity"
                                          class="cart-content__quantity" 
                                          min="1" 
                                          type="number" 
                                          value={item.quantity} 
                                          onChange={(e) => handleQuantityChange(e, item.id)}/>
                                    </div>
                                </div>
                                <div class="cart-content__del" onClick={() => handleRemoveItem(item.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z" fill="#575757"/>
                                </svg>
                                </div>
                                </div>
                                )
                            }
                        }))}
                    </div>
              
                    <div class="cart-content__buttons">
                    <button class="cart-content__btn" onClick={handleClearCart}>CLEAR SHOPPING CART</button>
                    <Link class="cart-content__btn" to={'/catalog'}>CONTINUE SHOPPING</Link>
            </div>
                </div> 
                <div class="cart-content__right">
            <div class="form-reg">
              <h1 class="form-reg__title">SHIPPING ADRESS</h1>
              <form action="#" class="form-reg__forms"><input class="form-reg__forms_place" type="text" style={{border: 'none'}} placeholder="Country" /></form>
              <form action="#" class="form-reg__forms"><input class="form-reg__forms_place" type="text" style={{border: 'none'}} placeholder="State" /></form>
              <form action="#" class="form-reg__forms"><input class="form-reg__forms_place" type="text" style={{border: '0px'}} placeholder="Postcode / Zip" /></form>
              <a href="#" class="form-reg__button">GET A QUOTE</a>
            </div>
            <div class="cost-box">
              <p class="cost-box__sub-total">SUB TOTAL         ${totalPrice.toFixed(2)}</p>
              <h2 class="cost-box__grand-total">GRAND TOTAL      <span class="cost-box__grand-total_price">${totalPrice.toFixed(2)}</span></h2>
              <button class="pink-button cost-box__button">PROCEED TO CHECKOUT</button>
            </div>
            </div>
            </div>
                
            </main>
            <Footer />
        </>
     );
}

export default CartPage;