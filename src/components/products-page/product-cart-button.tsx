import React from "react";
import ProductCart from "../../assets/images/cart-product.svg";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    cartWrapper: {
        display: "flex",
        flex: "0 0 100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ED1C24",
        "& img": {
            flex: "0 0 40px",
            height: "40px",
        },
    },
});

type TProps = {
    productId: number;
};

const ProductCartButton = ({ productId }: TProps): JSX.Element => {
    const classes = useStyles();

    return (
        <div className={classes.cartWrapper}>
            <img src={ProductCart} alt="product-cart" />
        </div>
    );
};

export default ProductCartButton;
