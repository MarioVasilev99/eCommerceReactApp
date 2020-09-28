import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/header/header";
import ProductsPage from "./components/products-page/Products";
import AddProductPage from "./components/add-product-page/AddProductPage";
import MyOrders from "./components/my-orders/MyOrders";
import { useSelector } from "react-redux";
import { RootState } from "./reducers";
import ShoppingCart from "./components/shopping-cart/ShoppingCart";

const useStyles = makeStyles({
    root: {
        minWidth: "80%",
        height: "auto",
    },
});

const App = (): JSX.Element => {
    const classes = useStyles();

    const isShoppingCartVisible = useSelector(
        (state: RootState) => state.shoppingCart.isVisible
    );

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
            {isShoppingCartVisible ? <ShoppingCart /> : null}
        </div>
    );
};

export default App;
