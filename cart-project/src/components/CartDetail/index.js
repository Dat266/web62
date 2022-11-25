import React, { useContext } from "react";
import className from "classnames/bind";

import styles from "./CartDetail.module.scss";
import CartContext from "../../context/CartContext";

const cx = className.bind(styles);

const CartDetail = () => {
    const { state } = useContext(CartContext);
    const { detail } = state;

    return (
        <div className={cx("wrapper")}>
            <h3>Cart detail</h3>
            <div className={cx("detail")}>
                <div className={cx("title")}>
                    <h2>{detail?.name}</h2>
                    <img src={detail?.img} width="400" />
                </div>
                <div className={cx("tech")}>
                    <h2>Thông số kỹ thuật</h2>
                    <hr />
                    <h5>
                        Màn hình <span>{detail?.info?.screen}</span>
                    </h5>
                    <hr />
                    <h5>
                        Hệ điều hành <span>{detail?.info?.os}</span>
                    </h5>
                    <hr />
                    <h5>
                        Camera trước <span>{detail?.info?.frontCamera}</span>
                    </h5>
                    <hr />
                    <h5>
                        Camera sau <span>{detail?.info?.backCamera}</span>
                    </h5>
                    <hr />
                    <h5>
                        RAM <span>{detail?.ram}</span>
                    </h5>
                    <hr />
                    <h5>
                        ROM <span>{detail?.rom}</span>
                    </h5>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default CartDetail;
