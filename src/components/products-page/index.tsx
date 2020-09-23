import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import Product from "./product";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    productsWrapper: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignContent: "space-between",
        marginTop: "80px",
    },
});

const Products = (): JSX.Element => {
    const classes = useStyles();

    const allProducts = useSelector(
        (state: RootState) => state.productsPage.products
    );

    const productsElements = allProducts.map((product) => {
        return (
            <Product
                key={product.id}
                id={product.id}
                image={product.image}
                name={product.name}
            />
        );
    });

    return <div className={classes.productsWrapper}>{productsElements}</div>;
};

export default Products;
