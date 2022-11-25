import React, { useContext } from "react";
import className from "classnames/bind";

import styles from "./CartPage.module.scss";
import CartContext from "../../context/CartContext";

const cx = className.bind(styles);

const CartPage = () => {
    const { state, dispatch } = useContext(CartContext);

    const handleDecrease = (id) => {
        const action = {
            type: "DECREASE_QUANTITY",
            payload: { id },
        };
        dispatch(action);
    };

    const handleIncrease = (id) => {
        const action = {
            type: "INCREASE_QUANTITY",
            payload: { id },
        };
        dispatch(action);
    };

    const handleDelete = (id) => {
        const action = {
            type: "DELETE_CART_ITEM",
            payload: { id },
        };
        dispatch(action);
    };

    const renderCartPage = state?.cart.map((item) => {
        return (
            <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>
                    <img src={item.img} width="45" />
                </td>
                <td className={cx("btn-qty")}>
                    <button
                        className="btn btn-primary"
                        onClick={() => handleDecrease(item.id)}
                    >
                        -
                    </button>
                    <span className="mx-1">{item.quantity}</span>
                    <button
                        className="btn btn-primary"
                        onClick={() => handleIncrease(item.id)}
                    >
                        +
                    </button>
                </td>

                <td>{item.price} đ</td>
                <td>{item.price * item.quantity} đ</td>
                <td>
                    <svg
                        onClick={() => handleDelete(item.id)}
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        fill="currentColor"
                        className={cx("bi ", "bi-trash3")}
                        viewBox="0 0 16 16"
                    >
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                    </svg>
                </td>
            </tr>
        );
    });

    return (
        <div className={cx("wrapper")}>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Tên SP</th>
                        <th scope="col">Hình ảnh</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Thành tiền</th>
                        <th scope="col">Tùy chọn</th>
                    </tr>
                </thead>
                <tbody className={cx("table-group-divider", "cart-emtry")}>
                    {state.cart.length === 0 ? (
                        <tr>
                            <td
                                colSpan="7"
                                style={{
                                    fontSize: "1.4rem",
                                }}
                            >
                                Giỏ hàng trống
                            </td>
                        </tr>
                    ) : (
                        renderCartPage
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default CartPage;
