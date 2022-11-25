import React from "react";
import classNames from "classnames/bind";

import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

const AccountItem = () => {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("img")}>
                {" "}
                <img
                    src="https://cart-mindx-project.netlify.app/assets/img/samsung-galaxy.jpg"
                    width="50"
                />
            </div>
            <div>
                <h6>Name</h6>
                <p>Price</p>
            </div>
        </div>
    );
};

export default AccountItem;
