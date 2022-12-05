import React, { useContext, useState } from "react";
import classNames from "classnames/bind";
import { v4 as uuidv4 } from "uuid";

import { PERSONAL, PROFESSIONAL } from "../../config/constant";
import { ContextCard } from "../../contexts/ContextCard";

import styles from "./ContactForm.module.scss";
import ContactServices from "../../services/contactServices";

const cx = classNames.bind(styles);

const ContactForm = ({ onAddContact }) => {
    const {
        isEdit,
        setIsEdit,
        setContactForm,
        contactForm,
        inital,
        listContacts,
        setListContacts,
    } = useContext(ContextCard);

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setContactForm({
            ...contactForm,
            [name]: value,
        });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onAddContact({ ...contactForm });
        setContactForm(inital);
    };

    const onUpdate = async () => {
        const res = await ContactServices.update(contactForm);
        console.log("update:", res);
        setContactForm(inital);
    };

    const onClear = () => {
        setIsEdit(false);
        setContactForm(inital);
    };

    const { name, email, phone, type } = contactForm;
    return (
        <div className={cx("wrapper")}>
            <h2>{isEdit ? "Edit Contact" : "Add Contact"}</h2>
            <form>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control fs-5"
                        id="name"
                        aria-describedby="emailHelp"
                        placeholder="Name"
                        onChange={onChangeHandler}
                        value={name}
                        name="name"
                        required
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="email"
                        className="form-control fs-5"
                        id="email"
                        placeholder="Email"
                        onChange={onChangeHandler}
                        value={email}
                        name="email"
                        required
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control fs-5"
                        id="phone"
                        aria-describedby="emailHelp"
                        placeholder="Phone"
                        onChange={onChangeHandler}
                        value={phone}
                        name="phone"
                        required
                    />
                </div>
                <h5 className="text-sm-start">Contact Type</h5>
                <div className="mt-3 mb-4 form-check d-flex p-0">
                    <div className="form-check ">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="type"
                            id="flexRadioDefault1"
                            onChange={onChangeHandler}
                            value={PERSONAL}
                            checked={type === PERSONAL}
                        />
                        <label className="form-check-label" htmlFor="personal">
                            Personal
                        </label>
                    </div>
                    <div className="form-check ms-3">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="type"
                            id="flexRadioDefault2"
                            onChange={onChangeHandler}
                            checked={type === PROFESSIONAL}
                            value={PROFESSIONAL}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="professional"
                        >
                            Professional
                        </label>
                    </div>
                </div>
                {isEdit ? (
                    <div className="d-grid gap-2">
                        <button
                            onClick={onUpdate}
                            className="btn btn-primary fs-5"
                            type="button"
                        >
                            Update Contact
                        </button>
                        <button
                            onClick={onClear}
                            className="btn btn-secondary fs-5"
                            type="button"
                        >
                            Clear
                        </button>
                    </div>
                ) : (
                    <div className="d-grid gap-2">
                        <button
                            onClick={onSubmitHandler}
                            className="btn btn-primary fs-5"
                            type="button"
                        >
                            Add Contact
                        </button>
                    </div>
                )}
            </form>
        </div>
    );
};

export default ContactForm;
