import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "./../products/products-page-slice";

interface ICartInitialState {
    products: IProduct[];
}

const shoppingCartInitialState: ICartInitialState = {
    products: [],
};

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: shoppingCartInitialState,
    reducers: {},
});
