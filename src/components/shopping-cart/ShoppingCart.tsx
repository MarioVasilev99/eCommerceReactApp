import React from "react";
import { makeStyles } from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";
import { hideCart } from "../../reducers/shopping-cart/cart-slice";
import closeIcon from "../../assets/images/close-icon.svg";
import ShoppingCartItem from "./ShoppingCartItem";
import { RootState } from "../../reducers";
import { IProduct } from "./../../reducers/products/products-page-slice";

const useStyles = makeStyles({
    cartWrapper: {
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        position: "absolute",
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
        height: "400px",
        width: "800px",
        borderRadius: "4px",
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
});

const ShoppingCart = (): JSX.Element => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const handleHideCartClick: React.MouseEventHandler = (e) => {
        dispatch(hideCart());
    };

    const itemsInCart = useSelector(
        (state: RootState) => state.shoppingCart.products
    );

    const itemsInCartAsElements = itemsInCart.map((i: IProduct) => {
        return (
            <ShoppingCartItem
                Id={i.id}
                ImageUrl={i.image}
                Name={i.name}
                Price={i.price}
            />
        );
    });

    return (
        <div className={classes.cartWrapper}>
            <div className={classes.cart}>
                <img
                    className={classes.closeIcon}
                    src={closeIcon}
                    alt="close-icon"
                    onClick={handleHideCartClick}
                />
                <h1 className={classes.heading}>Shopping Cart</h1>
                <ul>{itemsInCartAsElements}</ul>
            </div>
        </div>
    );
};

export default ShoppingCart;
