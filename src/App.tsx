import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/header/header";
import ProductsPage from "./components/products-page/index";
import AddProductPage from "./components/add-product-page/index";
import MyOrders from "./components/my-orders/MyOrders";

const useStyles = makeStyles({
    root: {
        minWidth: "80%",
    },
});

function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header />
            <Route exact path="/" render={() => <ProductsPage />} />
            <Route
                exact
                path="/products/add"
                render={() => <AddProductPage />}
            />
            <Route exact path="/orders" render={() => <MyOrders />} />
        </div>
    );
}

export default App;
