import React from "react";
import { makeStyles } from "@material-ui/styles";
import { useDispatch } from "react-redux";
import { hideCart } from "../../reducers/shopping-cart/cart-slice";
import closeIcon from "../../assets/images/close-icon.svg";

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
        position: "relative",
        backgroundColor: "white",
        height: "400px",
        width: "800px",
        borderRadius: "4px",
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

    return (
        <div className={classes.cartWrapper}>
            <div className={classes.cart}>
                <img
                    className={classes.closeIcon}
                    src={closeIcon}
                    alt="close-icon"
                    onClick={handleHideCartClick}
                />
                <ul></ul>
            </div>
        </div>
    );
};

export default ShoppingCart;
