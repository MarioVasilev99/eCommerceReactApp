import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewProductData } from "../../components/add-product-page/index";

interface IProduct {
    id: number;
    name: string;
    price: number;
    image: string;
}

interface IProductsState {
    products: Array<IProduct>;
}

const productsInitialState: IProductsState = {
    products: [
        {
            id: 1,
            name: "Rubberised Print T-Shirt",
            price: 9.99,
            image:
                "https://st.depositphotos.com/2251265/4803/i/450/depositphotos_48037605-stock-photo-man-wearing-t-shirt.jpg",
        },
        {
            id: 2,
            name: "Contrast Top TRF",
            price: 11.99,
            image: "https://picture-cdn.wheretoget.it/tvrznj-i.jpg",
        },
        {
            id: 3,
            name: "Tied Leather Heeled Sandals",
            price: 49.95,
            image:
                "https://celticandco.global.ssl.fastly.net/usercontent/img/col-12/69602.jpg",
        },
        {
            id: 4,
            name: "Leather High Heel Sandals With Gathering",
            price: 39.95,
            image:
                "https://cf.shopee.com.my/file/36df2e1d04ca103f16ccefffa9927728",
        },
    ],
};

const productsPageSlice = createSlice({
    name: "products",
    initialState: productsInitialState,
    reducers: {
        addProduct(state, action: PayloadAction<NewProductData>) {
            debugger;
            const lastId = state.products.length;
            const newProduct: IProduct = {
                id: lastId + 1,
                name: action.payload.name,
                price: action.payload.price,
                image: action.payload.imageUrl,
            };

            state.products.push(newProduct);
        },
    },
});

export const { addProduct } = productsPageSlice.actions;
export default productsPageSlice;
