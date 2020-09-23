import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    root: {
        margin: "1em 2em 1em 2em",
        "& h1": {
            padding: "1em",
            color: "#FFFFFF",
            backgroundColor: "#ED1C24",
        },
    },
});

const MyOrders = (): JSX.Element => {
    const allOrders = useSelector(
        (state: RootState) => state.myOrdersState.myOrders
    );

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1>My Orders</h1>
        </div>
    );
};

export default MyOrders;
