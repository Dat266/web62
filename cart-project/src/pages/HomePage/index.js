import React, { useContext, useState } from "react";
import Product from "../../components/Product";
import className from "classnames/bind";

import styles from "./HomePage.module.scss";
import CartDetail from "../../components/CartDetail";
import CartContext from "../../context/CartContext";

const cx = className.bind(styles);

const HomePage = () => {
    const { state } = useContext(CartContext);

    return (
        <div className={cx("wrapper")}>
            <Product />
            {state.detail.id ? <CartDetail /> : <div></div>}
        </div>
    );
};

export default HomePage;
