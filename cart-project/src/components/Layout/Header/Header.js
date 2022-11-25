import React, { useContext, useState } from "react";
import className from "classnames/bind";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";

import styles from "./Header.module.scss";
import CartContext from "../../../context/CartContext";
import AccountItem from "../../AccountItem";
import PopperWrapper from "../../Popper";

const cx = className.bind(styles);

const Header = () => {
    const { state } = useContext(CartContext);
    const [input, setInput] = useState([]);

    const totalCart = state.cart.reduce(
        (prev, curr) => prev + curr.quantity,
        0
    );

    return (
        <div className={cx("wrapper-header")}>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand" href="#">
                        CellphoneS
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    to="/"
                                    className="nav-link active"
                                    aria-current="page"
                                    href="#"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    About
                                </a>
                            </li>
                        </ul>
                        <Tippy
                            render={(attrs) => (
                                <div
                                    interactive="true"
                                    visable={
                                        input.length > 0 ? input : undefined
                                    }
                                    className={cx("search-result")}
                                    tabIndex="-1"
                                    {...attrs}
                                >
                                    <PopperWrapper>
                                        <h3 className={cx("search-title")}>
                                            Kết quả
                                        </h3>
                                        <AccountItem />
                                        <AccountItem />
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <div className={cx("d-flex")} role="search">
                                <input
                                    value={input}
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    onChange={(e) => setInput(e.target.value)}
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className={cx(
                                        "bi",
                                        "bi-search",
                                        "svg-search"
                                    )}
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </div>
                        </Tippy>
                        <div className={cx("svg-cart")}>
                            <Link to="/cart">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="bi bi-cart"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                </svg>
                            </Link>
                            <span className={cx("cart-number")}>
                                {totalCart}
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
