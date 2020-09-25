import React from "react";
import { makeStyles } from "@material-ui/styles";
import removeIcon from "../../assets/images/delete-icon.svg";

const useStyles = makeStyles({
    itemWrapper: {
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        justifyContent: "center",
        alignItems: "center",

        margin: "0 0.8em 0 0.8em",
        borderRadius: "0.3em",
        backgroundColor: "#F5F6F8",
        boxShadow: "10px 10px 9px -13px rgba(0,0,0,0.75)",
    },
    productImage: {
        gridColumn: "1 / span 2",
        marginLeft: "0.2em",
        border: "1px solid black",
        borderRadius: "0.2em",
        width: "80px",
        height: "80px",
    },
    productName: {
        gridColumn: "3 / span 5",
        justifySelf: "center",
    },
    productPrice: {
        gridColumn: "8 / span 3",
        justifySelf: "center",
    },
    removeProductIcon: {
        gridColumn: "11 / span 2",
        justifySelf: "center",
        width: "35px",
        height: "35px",
    },
});

const ShoppingCartItem = (): JSX.Element => {
    const classes = useStyles();
    return (
        <li className={classes.itemWrapper}>
            <img
                src="https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1546939812/565806_XJAZY_9037_001_100_0000_Light-T-shirt-with-Gucci-Blade-print.jpg"
                alt=""
                className={classes.productImage}
            />
            <p className={classes.productName}>Product name</p>
            <p className={classes.productPrice}>$100.99</p>
            <img
                src={removeIcon}
                alt="remove-product-icon"
                className={classes.removeProductIcon}
            />
        </li>
    );
};

export default ShoppingCartItem;
