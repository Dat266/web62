import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames/bind";

import ContactForm from "../../components/ContactForm";
import ContactList from "../../components/ContactList";
import styles from "./ContactPage.module.scss";
import { ContextCard } from "../../contexts/ContextCard";

const cx = classNames.bind(styles);

//     {
//         id: 1,
//         name: "Jill Johnson",
//         email: "jill@gmail.com",
//         phone: "111-111-1111",
//         type: "personal",
//     },
//     {
//         id: 2,
//         name: "Sara Watson",
//         email: "sara@gmail.com",
//         phone: "222-222-2222",
//         type: "personal",
//     },
//     {
//         id: 3,
//         name: "Harry White",
//         email: "harry@gmail.com",
//         phone: "333-333-3333",
//         type: "professional",
//     },
// ];

const ContactPage = () => {
    const { listContacts, setListContacts } = useContext(ContextCard);

    const onAddContact = (contact) => {
        setListContacts([...listContacts, contact]);
    };

    return (
        <div className={cx("wrapper")}>
            <ContactForm onAddContact={onAddContact} />
            <ContactList
                listContacts={listContacts}
                setListContacts={setListContacts}
            />
        </div>
    );
};

export default ContactPage;
