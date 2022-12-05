import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <div className={cx("wrapper")}>
            <nav className="navbar navbar-expand-lg bg-light px-5 ">
                <div className="container-fluid ">
                    <Link className="navbar-brand fs-3 fw-bold" to="/">
                        Contact Keeper
                    </Link>

                    <ul className="navbar-nav  mb-2 mb-lg-0 nav navbar-right fs-5">
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;
