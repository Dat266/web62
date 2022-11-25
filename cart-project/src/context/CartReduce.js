const reduce = (state, action) => {
    const { type, payload } = action;
    console.log("payload:", payload);
    console.log("type:", type);

    switch (type) {
        case "CART-DETAIL":
            const detail = { ...payload };
            return { ...state, detail };

        case "ADD-TO-CART":
            let newCart = [];

            const searchItemIndex = state.cart.findIndex(
                (cartItem) => cartItem.id === payload.id
            );

            if (searchItemIndex === -1) {
                const newCartItem = { ...payload, quantity: 1 };
                newCart = [...state.cart, newCartItem];
            } else {
                newCart = [...state.cart];
                newCart[searchItemIndex].quantity += 1;
            }

            return {
                ...state,
                cart: newCart,
            };

        case "INCREASE_QUANTITY":
            const searchIndexIncrease = state.cart.findIndex(
                (cartItem) => cartItem.id === payload.id
            );

            const increaseCart = [...state.cart];

            increaseCart[searchIndexIncrease].quantity += 1;
            return {
                ...state,
                cart: increaseCart,
            };

        case "DECREASE_QUANTITY":
            const searchIndexDecrease = state.cart.findIndex(
                (cartItem) => cartItem.id === payload.id
            );

            const decreaseCart = [...state.cart];

            decreaseCart[searchIndexDecrease].quantity -= 1;
            return {
                ...state,
                cart: decreaseCart,
            };
        case "DELETE_CART_ITEM":
            const remainCart = state.cart.filter(
                (cart) => cart.id !== payload.id
            );

            return { ...state, cart: remainCart };

        default:
            return state;
    }
};

export default reduce;
