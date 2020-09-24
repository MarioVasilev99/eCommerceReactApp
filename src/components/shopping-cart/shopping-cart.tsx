import React from "react";
import { makeStyles } from "@material-ui/styles";
import { useDispatch } from "react-redux";
import { hideCart } from "../../reducers/shopping-cart/cart-slice";

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
    },
    cart: {
        backgroundColor: "white",
        height: "200px",
        width: "400px",
    },
});

const ShoppingCart = (): JSX.Element => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const handleHideCartClick: React.MouseEventHandler = (e) => {
        dispatch(hideCart());
    };

    return (
        <div className={classes.cartWrapper} onClick={handleHideCartClick}>
            <div className={classes.cart}>Shoppiiiiings</div>
        </div>
    );
};

export default ShoppingCart;
