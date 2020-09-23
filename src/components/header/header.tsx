import { makeStyles } from "@material-ui/styles";
import { NavLink } from "react-router-dom";
import React from "react";
import HeaderMenuList from "./header-menu/HeaderMenuList";
import Cart from "./header-cart/cart";
import logo from "../../assets/images/logo.svg";

const useStyles = makeStyles({
    root: {
        display: "grid",
        gridTemplateColumns: "3fr 1.5fr",
        backgroundColor: "#FFFFFF",
        height: "111px",
        width: "auto",
        filter: "drop-shadow(4px 0px 2px rgba(0, 0, 0, 0.25))",
    },
    signature: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "36px",
        lineHeight: "42px",
        color: "#ED1C24",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
        textDecoration: "none",
        marginLeft: "1.5em",
    },
    logoArea: {
        padding: "0.5em",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    navigationArea: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
});

const Header: React.FC = (props) => {
    const classes = useStyles();

    return (
        <header className={classes.root}>
            <div className={classes.logoArea}>
                <NavLink to="/">
                    <img src={logo} alt="logo" />
                </NavLink>
                <NavLink className={classes.signature} to="/">
                    <p>eSHOP.com</p>
                </NavLink>
            </div>
            <div className={classes.navigationArea}>
                <HeaderMenuList />
                <Cart />
            </div>
        </header>
    );
};

export default Header;
