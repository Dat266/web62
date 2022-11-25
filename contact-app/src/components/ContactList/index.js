import classNames from "classnames/bind";
import React, { useEffect, useState } from "react";

import ContactCard from "../ContactCard";
import styles from "./ContactList.module.scss";

const cx = classNames.bind(styles);

const ContactList = ({ listContacts, setListContacts }) => {
    const [search, setSearch] = useState("");

    return (
        <div className={cx("wrapper")}>
            <div>
                <input
                    type="text"
                    id="inputPassword5"
                    className="form-control fs-5"
                    aria-describedby="passwordHelpBlock"
                    placeholder="Filter Contacts ..."
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <ContactCard search={search} />
        </div>
    );
};

export default ContactList;
