import React from "react";
import ProductCart from "../../assets/images/cart-product.svg";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    cartWrapper: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#ED1C24",
        padding: "1em",
    },
});

type TProps = {
    productId: number;
};

const ProductCartButton = ({ productId }: TProps): JSX.Element => {
    const classes = useStyles();

    return (
        <div className={classes.cartWrapper}>
            <img src={ProductCart} alt="product-cart-image" />
        </div>
    );
};

export default ProductCartButton;
