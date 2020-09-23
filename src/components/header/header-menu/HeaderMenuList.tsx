import React from "react";
import HeaderMenuListItem from "./HeaderMenuListItem";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import { ILinkItemsProps } from "./../../../reducers/header/header-interfaces";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    navigationWrapper: {
        display: "grid",
    },
    navigationBar: {
        display: "flex",
        height: "100%",
    },
});

const HeaderMenuList = (): JSX.Element => {
    const classes = useStyles();

    const navigationMenuLinks: ILinkItemsProps[] = useSelector(
        (state: RootState) => state.header.linkItems
    );

    const headerItems = navigationMenuLinks.map((element) => (
        <HeaderMenuListItem
            key={element.id}
            pageName={element.pageName}
            pageUrl={element.pageUrl}
        />
    ));

    return <ul className={classes.navigationBar}>{headerItems}</ul>;
};

export default HeaderMenuList;
