import React, { useContext, useEffect, useState } from "react";
import className from "classnames/bind";

import styles from "./Product.module.scss";
import CartState from "../../context/CartState";
import CartContext from "../../context/CartContext";

const cx = className.bind(styles);

const initalData = [
    {
        id: 1,
        name: "Samsung Galaxy A10",
        price: "40906000",
        img: "https://cart-mindx-project.netlify.app/assets/img/samsung-galaxy.jpg",
        info: {
            screen: "AMOLED Full HD 9.0",
            os: "Android 9.0",
            frontCamera: "20MP",
            backCamera: "Chính 48MB, phụ 30MP",
        },
        ram: "4 GB",
        rom: "64 GB",
    },
    {
        id: 2,
        name: "IPhone12",
        price: "200306000",
        img: "https://cart-mindx-project.netlify.app/assets/img/iphone-12.jpg",
        info: {
            screen: "Full HD 12.0",
            os: "IOS 14",
            frontCamera: "20MP",
            backCamera: "Chính 100MB, phụ 30MP",
        },
        ram: "16 GB",
        rom: "32 GB",
    },
    {
        id: 3,
        name: "Xiaomi Note 10",
        price: "10005000",
        img: "https://cart-mindx-project.netlify.app/assets/img/xiaomi-redmi-note-10-5g.jpg",
        info: {
            screen: "OLED 10.0",
            os: "Android 8.0",
            frontCamera: "69MP",
            backCamera: "Chính 96MB, phụ 30MP",
        },
        ram: "10 GB",
        rom: "64 GB",
    },
];

const Product = () => {
    const [data, setData] = useState([]);
    const { state, dispatch } = useContext(CartContext);

    // event click cart detail

    const onDetail = (id) => {
        const cartDetail = data.find((item) => item.id === id);

        const action = {
            type: "CART-DETAIL",
            payload: cartDetail,
        };

        dispatch(action);
    };

    // event click add to cart

    const onAddToCart = (id) => {
        const cart = data.find((item) => item.id === id);
        const action = {
            type: "ADD-TO-CART",
            payload: cart,
        };
        dispatch(action);
    };

    // get api
    useEffect(() => {
        setData(initalData);
    }, []);

    const renderProduct =
        data &&
        data.map((item) => {
            return (
                <div
                    key={item.id}
                    className="card mx-5 px-3 py-2"
                    style={{ width: "18rem" }}
                >
                    <img
                        src={item.img}
                        className="card-img-top"
                        alt={item.name}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.price}</p>
                        <div className={cx("action")}>
                            <button onClick={() => onAddToCart(item.id)}>
                                Add to cart
                            </button>
                            <button onClick={() => onDetail(item.id)}>
                                Cart detail
                            </button>
                        </div>
                    </div>
                </div>
            );
        });

    return <div className={cx("wrapper")}>{renderProduct}</div>;
};

export default Product;
