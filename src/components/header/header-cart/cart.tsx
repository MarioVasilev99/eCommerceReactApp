import React from "react";
import { makeStyles } from "@material-ui/styles";
import cartImg from "../../../assets/images/cart.svg";
import circle from "../../../assets/images/circle.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import { displayCart } from "../../../reducers/shopping-cart/cart-slice";

const UseStyles = makeStyles({
    cartWrapper: {
        position: "relative",
        top: "5px",
        left: "0",
        marginLeft: "4em",
        "&:hover": {
            cursor: "pointer",
        },
    },
    cart: {
        position: "relative",
        top: "0",
        left: "0",
    },
    circle: {
        position: "absolute",
        top: "35px",
        right: "-10px",
    },
    counter: {
        position: "relative",
        top: "-16px",
        right: "-46px",
        color: "#FFFFFF",
    },
});

const Cart = (): JSX.Element => {
    const classes = UseStyles();

    const cartItemsCount = useSelector(
        (state: RootState) => state.shoppingCart.products.length
    );

    const dispatch = useDispatch();
    const handleCartClick: React.MouseEventHandler = (e) => {
        dispatch(displayCart());
    };

    return (
        <div onClick={handleCartClick} className={classes.cartWrapper}>
            <img className={classes.cart} src={cartImg} alt="cart" />
            <img className={classes.circle} src={circle} alt="items-count" />
            <p className={classes.counter}>{cartItemsCount}</p>
        </div>
    );
};

export default Cart;
