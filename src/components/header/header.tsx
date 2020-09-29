import { makeStyles } from "@material-ui/styles";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import HeaderMenuList from "./header-menu/HeaderMenuList";
import logo from "../../assets/images/logo.svg";

const useStyles = makeStyles({
    root: {
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        backgroundColor: "#FFFFFF",
        height: "80px",
        maxWidth: "100vw",
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
        marginLeft: "1em",
    },
    logoArea: {
        gridColumnStart: "1",
        gridColumnEnd: "5",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        marginLeft: "1em",
    },
    navigationArea: {
        gridColumnStart: "5",
        gridColumnEnd: "7",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
});

const Header = (): JSX.Element => {
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
            </div>
        </header>
    );
};

export default Header;
