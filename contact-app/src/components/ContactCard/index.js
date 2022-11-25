import React, { useContext } from "react";
import classNames from "classnames/bind";

import styles from "./ContactCard.module.scss";
import { ContextCard } from "../../contexts/ContextCard";

const cx = classNames.bind(styles);

const ContactCard = ({ search }) => {
    const { setIsEdit, setContactForm, setListContacts, listContacts } =
        useContext(ContextCard);

    const onEditContact = (id) => {
        const findContact = listContacts.find((item) => item.id === id);
        setContactForm(findContact);
        setIsEdit(true);
    };

    const onDelete = (id) => {
        const newList = listContacts.filter((item) => item.id !== id);
        setListContacts(newList);
    };

    const renderContact = listContacts
        .filter((item) => item.name.includes(search))
        .map((item) => {
            return (
                <div className="card mt-3" key={item.id}>
                    <div className="card-body d-flex">
                        <div className={cx("card__content")}>
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-envelope-fill me-2"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                </svg>

                                {item.email}
                            </p>
                            <p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-telephone-fill me-2"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                                    />
                                </svg>

                                {item.phone}
                            </p>
                            <div className="d-flex">
                                <button
                                    className="btn btn-success "
                                    onClick={() => onEditContact(item.id)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger mx-1"
                                    onClick={() => onDelete(item.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                        <div>
                            <a href="#" className="btn btn-primary">
                                {item.type}
                            </a>
                        </div>
                    </div>
                </div>
            );
        });

    return <div className={cx("wrapper")}>{renderContact}</div>;
};

export default ContactCard;
