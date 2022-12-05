import { useEffect, useState } from "react";
import ContactServices from "../services/contactServices";

const useFetch = () => {
    const [contact, setContact] = useState([]);

    useEffect(() => {
        fetchContact();
    }, [contact]);

    const fetchContact = async () => {
        try {
            const res = await ContactServices.getAll();
            setContact([...res?.data?.message]);
        } catch (error) {
            console.log(error);
        }
    };

    return { contact, setContact };
};

export default useFetch;
