import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "..";
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
        removeItemFromCart(state, action: PayloadAction<number>) {
            const itemToRemoveIndex = state.products.findIndex(
                (p: IProduct) => p.id === action.payload
            );

            state.products.splice(itemToRemoveIndex, 1);
        },
        resetCart(state) {
            state.products = [];
            state.totalSum = 0.0;
            state.isVisible = false;
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
    removeItemFromCart,
    resetCart,
    displayCart,
    hideCart,
} = shoppingCartSlice.actions;
export default shoppingCartSlice;
