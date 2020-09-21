import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import ProductCartButton from "./product-cart-button";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    productItem: {
        display: "flex",
        flexWrap: "wrap",
        width: "350px",
    },
    productImage: {
        width: "350px",
        height: "350px",
    },
    nameWrapper: {
        display: "flex",
        flexBasis: "75%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#E2E2E2",
    },
    productName: {
        fontFamily: "Roboto",
        fontSize: "23px",
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
            <div className={classes.nameWrapper}>
                <p className={classes.productName}>{name}</p>
            </div>
            <ProductCartButton productId={id} />
        </div>
    );
};

export default Product;
