import React, { createContext, useState } from "react";
import all_product from '../components/Assets/all_product';


export const ShopContext = createContext(null);

const getDefaultCart = ()=>
{
  let cart = {};
  for(let index=0; index<all_product.length+1; index++)
  {
    cart[index]=0;
  }
  return cart;
}

const ShopContextProvider = (props) =>
{


  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) =>
  {
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
    console.log(cartItems);
  }
  const RemoveFromCart = (itemId) =>
  {
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));

  }

  const getTotalCartAmount = () =>
  {
    let Totalamount = 0;
    for(const item in cartItems)
    {
       if(cartItems[item]>0)
       {
        let iteminfo = all_product.find((product)=>product.id===Number(item));
        Totalamount+=iteminfo.new_price*cartItems[item];
       }
      
    }
    return Totalamount;
  }

  const getTotalCartItem = () => {
  
    const uniqueProducts = new Set();

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        uniqueProducts.add(item);
      }
    }
  
    return uniqueProducts.size;
  };

  const contextValue = {all_product, cartItems, addToCart, RemoveFromCart, getTotalCartAmount, getTotalCartItem };

  return (
    <ShopContext.Provider value={contextValue} >
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;