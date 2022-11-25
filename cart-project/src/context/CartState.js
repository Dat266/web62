import React, { useReducer } from "react";

import CartContext from "./CartContext";
import reduce from "./CartReduce";

const CartState = ({ children }) => {
    const initalValues = {
        cart: [],
        detail: {},
    };
    const [state, dispatch] = useReducer(reduce, initalValues);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartState;
