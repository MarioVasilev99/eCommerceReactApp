import React from "react";
import { makeStyles } from "@material-ui/styles";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
    linkButton: {
        padding: "1em",
        color: "#6F6F6F",
    },
});

type TProps = {
    pageName: string;
    pageUrl: string;
};

const HeaderMenuListItem = ({ pageName, pageUrl }: TProps): JSX.Element => {
    const classes = useStyles();

    return (
        <NavLink to={pageUrl}>
            <li className={classes.linkButton}>{pageName}</li>
        </NavLink>
    );
};

export default HeaderMenuListItem;
