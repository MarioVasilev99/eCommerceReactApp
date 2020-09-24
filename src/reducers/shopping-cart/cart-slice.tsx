import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "./../products/products-page-slice";

interface ICartInitialState {
    products: IProduct[];
    totalSum: number;
}

const shoppingCartInitialState: ICartInitialState = {
    products: [],
    totalSum: 0.0,
};

const shoppingCartSlice = createSlice({
    name: "cartSlice",
    initialState: shoppingCartInitialState,
    reducers: {
        addItemToCart(state, action: PayloadAction<IProduct>) {
            debugger;
            state.totalSum = state.totalSum + action.payload.price;
            state.products.push(action.payload);
        },
    },
});

export const { addItemToCart } = shoppingCartSlice.actions;
export default shoppingCartSlice;
