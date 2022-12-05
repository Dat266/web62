import classNames from "classnames/bind";
import React, { useContext } from "react";
import axios from "axios";

import ContactForm from "../../components/ContactForm";
import ContactList from "../../components/ContactList";
import { ContextCard } from "../../contexts/ContextCard";
import ContactServices from "../../services/contactServices";
import styles from "./ContactPage.module.scss";

const cx = classNames.bind(styles);

const ContactPage = () => {
    const { listContacts, setListContacts } = useContext(ContextCard);

    const onAddContact = async (contact) => {
        try {
            const res = await ContactServices.create(contact);
            const result = res?.data?.data;
            setListContacts([...listContacts, result]);
        } catch (error) {
            console.log(error.message);
        }
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
