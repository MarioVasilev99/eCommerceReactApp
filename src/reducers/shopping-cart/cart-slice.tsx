import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "./../products/products-page-slice";

interface ICartInitialState {
    products: IProduct[];
    totalSum: number;
    isVisible: boolean;
}

const shoppingCartInitialState: ICartInitialState = {
    products: [],
    totalSum: 0.0,
    isVisible: false,
};

const shoppingCartSlice = createSlice({
    name: "cartSlice",
    initialState: shoppingCartInitialState,
    reducers: {
        addItemToCart(state, action: PayloadAction<IProduct>) {
            state.totalSum = state.totalSum + action.payload.price;
            state.products.push(action.payload);
        },
        displayCart(state) {
            state.isVisible = true;
        },
        hideCart(state) {
            state.isVisible = false;
        },
    },
});

export const {
    addItemToCart,
    displayCart,
    hideCart,
} = shoppingCartSlice.actions;
export default shoppingCartSlice;
