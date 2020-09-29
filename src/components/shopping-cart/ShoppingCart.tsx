import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../../reducers/shopping-cart/cart-slice";
import { addOrder } from "../../reducers/myOrders/my-orders-slice";
import closeIcon from "../../assets/images/close-icon.svg";
import cartIcon from "../../assets/images/cart.svg";
import ShoppingCartItem, { ICartItemProps } from "./ShoppingCartItem";
import { RootState } from "../../reducers";
import { IProduct } from "./../../reducers/products/products-page-slice";

const useStyles = makeStyles({
    cartVisibleWrapper: {
        width: "100%",
        minHeight: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        position: "fixed",
        top: "0",
        left: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& p": {
            fontSize: "18px",
        },
    },
    cart: {
        position: "relative",
        backgroundColor: "white",
        maxHeight: "600px",
        minHeight: "200px",
        width: "800px",
        borderRadius: "10px",
    },
    heading: {
        backgroundColor: "#ED1C24",
        margin: "0.5em 0.5em 1em 0.5em",
        padding: "1em",
        borderRadius: "0.3em",

        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: "24px",
        textAlign: "center",
        color: "#FFFFFF",
        boxShadow: "10px 10px 9px -6px rgba(0,0,0,0.75)",
    },
    closeIcon: {
        position: "absolute",
        top: "-15px",
        left: "-15px",
        width: "30px",
        height: "30px",
    },
    itemsWrapper: {
        minHeight: "100px",
        maxHeight: "400px",
        overflow: "hidden",
        overflowY: "auto",
    },
    emptyCartWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100px",
        "& img": {
            marginRight: "0.5em",
        },
    },
    completeButton: {
        margin: "0.2em",
        padding: "1em",
        backgroundColor: "#16db6b",
        textAlign: "center",
        borderRadius: "10px",
        color: "#ffffff",
    },
});

export interface INewOrderInfo {
    products: IProduct[];
    totalPrice: number;
}

type TProps = {
    hideCart: () => void;
};

const ShoppingCart = ({ hideCart }: TProps): JSX.Element => {
    const itemsInCart = useSelector(
        (state: RootState) => state.shoppingCart.products
    );

    const orderTotalSum = useSelector(
        (state: RootState) => state.shoppingCart.totalSum
    );

    const dispatch = useDispatch();
    const handleCompleteButtonOnClick: React.MouseEventHandler = () => {
        if (itemsInCart.length === 0) {
            return;
        }

        const newOrderInfo: INewOrderInfo = {
            products: itemsInCart,
            totalPrice: orderTotalSum,
        };

        dispatch(addOrder(newOrderInfo));
        dispatch(resetCart());
    };

    const handleCompleteButtonOnLoad = () => {
        const completeButton = document.getElementById("complete-order-button");

        if (completeButton !== null && itemsInCart.length === 0) {
            completeButton.style.backgroundColor = "#aaaba9";
            completeButton.style.color = "#000000";
        }
    };

    const classes = useStyles();
    return (
        <div
            className={classes.cartVisibleWrapper}
            id="shopping-cart"
            onLoad={handleCompleteButtonOnLoad}
        >
            <div className={classes.cart}>
                <img
                    className={classes.closeIcon}
                    src={closeIcon}
                    alt="close-icon"
                    onClick={hideCart}
                />
                <h1 className={classes.heading}>Shopping Cart</h1>
                <ul className={classes.itemsWrapper}>
                    {itemsInCart.length > 0 ? (
                        itemsInCart.map((i: IProduct) => {
                            return (
                                <ShoppingCartItem
                                    key={i.id}
                                    Id={i.id}
                                    ImageUrl={i.image}
                                    Name={i.name}
                                    Price={i.price}
                                />
                            );
                        })
                    ) : (
                        <div className={classes.emptyCartWrapper}>
                            <img src={cartIcon} alt="shopping-cart-icon" />
                            <p>Your shopping cart is empty</p>
                        </div>
                    )}
                </ul>
                <p
                    id="complete-order-button"
                    className={classes.completeButton}
                    onClick={handleCompleteButtonOnClick}
                >
                    Complete Order
                </p>
            </div>
        </div>
    );
};

export default ShoppingCart;
