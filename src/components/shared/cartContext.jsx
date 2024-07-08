import React, {createContext, useState} from 'react';

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartHidden, setCartHidden] = useState(true);

    return (
        <CartContext.Provider value={{cartHidden, setCartHidden}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}