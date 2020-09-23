import React from "react";
import ProductCartButton from "./product-cart-button";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    productItem: {
        display: "flex",
        flexWrap: "wrap",
        flex: "0 0 350px",
        maxHeight: "460px",
        marginBottom: "96px",
    },
    productImage: {
        width: "350px",
        height: "350px",
        objectFit: "fill",
    },
    propertyWrapper: {
        display: "flex",
        width: "350px",
        height: "109px",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#E2E2E2",
    },
    nameWrapper: {
        display: "flex",
        flex: "0 0 239px",
        height: "109px",
        justifyContent: "center",
        alignItems: "center",
    },
    productName: {
        fontFamily: "Roboto",
        fontSize: "24px",
        lineHeight: "26.95px",
        textAlign: "center",
    },
});

type TProps = {
    id: number;
    image: string;
    name: string;
};

const Product = ({ id, image, name }: TProps): JSX.Element => {
    const classes = useStyles();

    return (
        <div className={classes.productItem}>
            <img
                className={classes.productImage}
                src={image}
                alt="productImage"
            />
            <div className={classes.propertyWrapper}>
                <div className={classes.nameWrapper}>
                    <p className={classes.productName}>{name}</p>
                </div>
                <ProductCartButton productId={id} />
            </div>
        </div>
    );
};

export default Product;
