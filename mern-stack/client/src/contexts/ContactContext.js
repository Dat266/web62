import React, { useState } from "react";
import { PERSONAL } from "../config/constant";
import { ContextCard } from "./ContextCard";

const inital = {
    id: "",
    name: "",
    email: "",
    phone: "",
    type: PERSONAL,
};

const ContactContext = ({ children }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [contactForm, setContactForm] = useState(inital);
    const [listContacts, setListContacts] = useState([]);

    const value = {
        isEdit,
        setIsEdit,
        contactForm,
        setContactForm,
        inital,
        listContacts,
        setListContacts,
    };

    return (
        <ContextCard.Provider value={value}>{children}</ContextCard.Provider>
    );
};

export default ContactContext;
