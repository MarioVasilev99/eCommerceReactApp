import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INewOrderInfo } from "../../components/shopping-cart/ShoppingCart";
import { IProduct } from "./../products/products-page-slice";

export interface IOrder {
    id: number;
    products: IProduct[];
    totalPrice: number;
    status: string;
}

interface IOrdersState {
    myOrders: IOrder[];
}

const ordersInitialState: IOrdersState = {
    myOrders: [
        {
            id: 1,
            products: [
                {
                    id: 1,
                    name: "Rubberised Print T-Shirt",
                    price: 9.99,
                    image:
                        "https://st.depositphotos.com/2251265/4803/i/450/depositphotos_48037605-stock-photo-man-wearing-t-shirt.jpg",
                },
            ],
            totalPrice: 9.99,
            status: "Completed",
        },
        {
            id: 2,
            products: [
                {
                    id: 1,
                    name: "Rubberised Print T-Shirt",
                    price: 9.99,
                    image:
                        "https://st.depositphotos.com/2251265/4803/i/450/depositphotos_48037605-stock-photo-man-wearing-t-shirt.jpg",
                },
            ],
            totalPrice: 9.99,
            status: "Completed",
        },
    ],
};

const myOrdersSlice = createSlice({
    name: "myOrders",
    initialState: ordersInitialState,
    reducers: {
        addOrder(state, action: PayloadAction<INewOrderInfo>) {
            const lastOrderId = state.myOrders.length;
            const newOrder: IOrder = {
                id: lastOrderId + 1,
                products: action.payload.products,
                totalPrice: action.payload.totalPrice,
                status: "Completed",
            };

            state.myOrders.push(newOrder);
        },
    },
});

export const { addOrder } = myOrdersSlice.actions;
export default myOrdersSlice;
