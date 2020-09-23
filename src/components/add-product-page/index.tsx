import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct } from "../../reducers/products/products-page-slice";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    heading: {
        gridColumnStart: "1",
        gridColumnEnd: "7",
        gridRowStart: "1",
        backgroundColor: "#ED1C24",
        padding: "1.5em",
        color: "#FFFFFF",
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: "24px",
        lineHeight: "28px",
        marginBottom: "1em",
    },
    formWrapper: {
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        padding: "5.5em",
        gridGap: "1em 1em",
    },
    productNameField: {
        gridColumnStart: "1",
        gridColumnEnd: "5",
    },
    imageField: {
        gridColumnStart: "1",
        gridColumnEnd: "7",
        gridRowStart: "3",
        width: "100%",
    },
    saveBtn: {
        gridRowStart: "4",
    },
});

export type NewProductData = {
    name: string;
    imageUrl: string;
    price: number;
};

const AddProductPage = (): JSX.Element => {
    const classes = useStyles();

    const { register, handleSubmit, reset } = useForm<NewProductData>();

    const dispatch = useDispatch();
    const onSubmit = (data: NewProductData) => {
        dispatch(addProduct(data));
        reset();
    };

    return (
        <form className={classes.formWrapper} onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.heading}>
                <h1>New Product</h1>
            </div>
            <div className={classes.productNameField}>
                <input
                    placeholder="Product name"
                    type="text"
                    id="name"
                    name="name"
                    ref={register}
                />
            </div>

            <div>
                <input
                    placeholder="Price"
                    type="number"
                    id="price"
                    name="price"
                    ref={register}
                />
            </div>

            <div className={classes.imageField}>
                <input
                    placeholder="Image Url"
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    ref={register}
                />
            </div>

            <div className={classes.saveBtn}>
                <input type="submit" value="Save" ref={register} />
            </div>
        </form>
    );
};

export default AddProductPage;
