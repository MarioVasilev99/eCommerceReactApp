import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/header/header";
import ProductsPage from "./components/products-page/index";
import AddProductPage from "./components/add-product-page/index";

const useStyles = makeStyles({
    root: {},
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
        </div>
    );
}

export default App;
