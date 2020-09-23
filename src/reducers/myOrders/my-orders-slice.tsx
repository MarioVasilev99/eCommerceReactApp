import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../products/products-page-slice";

interface IOrder {
    id: number;
    products: IProduct[];
    totalPrice: number;
    status: string;
}

const myOrdersSlice = createSlice({
    name: "myOrders",
    initialState: {
        myOrders: [],
    },
    reducers: {
        addOrder(state, action: PayloadAction) {
            const lastOrderId = state.myOrders.length;
        },
    },
});

export const { addOrder } = myOrdersSlice.actions;
export default myOrdersSlice;
