import React from "react";
import { makeStyles } from "@material-ui/styles";
import cartImg from "../../../assets/images/cart.svg";
import circle from "../../../assets/images/circle.svg";

const UseStyles = makeStyles({
    cartWrapper: {
        position: "relative",
        top: "0",
        left: "0",
        marginLeft: "4em",
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
});

const cart = (): JSX.Element => {
    const classes = UseStyles();
    return (
        <div className={classes.cartWrapper}>
            <img className={classes.cart} src={cartImg} alt="cart" />
            <img className={classes.circle} src={circle} alt="items-count" />
        </div>
    );
};

export default cart;
