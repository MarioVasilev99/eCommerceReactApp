import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import Product from "./product";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        productsWrapper: {
            position: "relative",
            overflow: "hidden",
            display: "grid",
            [theme.breakpoints.between("lg", "xl")]: {
                gridTemplateColumns: "repeat(3, 300px)",
            },
            [theme.breakpoints.up("xl")]: {
                gridTemplateColumns: "repeat(4, 300px)",
            },
            justifyItems: "center",
            justifyContent: "center",
            gap: "3em 5em",
            marginTop: "60px",
            marginBottom: "60px",
        },
    })
);

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
