import { createSlice } from "@reduxjs/toolkit";
import { IHeaderStateProps } from "./header-interfaces";

const headerInitialState: IHeaderStateProps = {
    linkItems: [
        {
            id: 1,
            pageName: "Products",
            pageUrl: "/",
        },
        {
            id: 2,
            pageName: "My Orders",
            pageUrl: "/orders",
        },
        {
            id: 3,
            pageName: "Add Product",
            pageUrl: "/products/add",
        },
    ],
    cart: {
        totalPrice: 0,
        cartItemsCount: 0,
    },
};

const headerSlice = createSlice({
    name: "headerSlice",
    initialState: headerInitialState,
    reducers: {},
});

export default headerSlice;
