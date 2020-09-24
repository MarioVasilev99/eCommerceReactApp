import React from "react";
import { IProduct } from "./../../reducers/products/products-page-slice";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    orderListItem: {
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        alignItems: "center",
        justifyItems: "center",
        border: "2px solid #C4C4C4",
        fontSize: "18px",
        marginTop: "7px",
        "&:first-child": {
            marginTop: "2em",
        },
    },
    cell: {
        textAlign: "center",
        width: "100%",
        padding: "1em 0 1em 0",
        borderRight: "2px solid #C4C4C4",
        "&:last-child": {
            borderRight: "none",
        },
    },
    orderId: {
        gridColumn: "1 / span 2",
    },
    productsList: {
        gridColumn: "3 / span 5",
    },
    price: {
        gridColumn: "8 / span 2",
    },
    status: {
        gridColumn: "10 / span 3",
    },
});

type TProps = {
    id: number;
    products: IProduct[];
    totalPrice: number;
    status: string;
};

const Order = ({ id, products, totalPrice, status }: TProps): JSX.Element => {
    const classes = useStyles();
    const productsNames = products.map((product: IProduct) => {
        return <li>{product.name}</li>;
    });

    return (
        <li className={classes.orderListItem}>
            <p className={`${classes.orderId} ${classes.cell}`}>Order # {id}</p>
            <ul className={`${classes.productsList} ${classes.cell}`}>
                {productsNames}
            </ul>
            <p className={`${classes.price} ${classes.cell}`}>{totalPrice}</p>
            <p className={`${classes.status} ${classes.cell}`}>{status}</p>
        </li>
    );
};

export default Order;
