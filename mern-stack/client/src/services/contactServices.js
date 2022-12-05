import axiosInstance from "./axiosInstance";

const ContactServices = {
    getAll: () =>
        axiosInstance({
            method: "GET",
            url: "/",
        }),

    user: (id) =>
        axiosInstance({
            method: "GET",
            url: `/${id}`,
        }),

    create: (contact) =>
        axiosInstance({
            method: "POST",
            url: "/create",
            data: { contact },
        }),

    update: (contact) =>
        axiosInstance({
            method: "PUT",
            url: "/update",
            data: { contact },
        }),

    delete: (id) =>
        axiosInstance({
            method: "DELETE",
            url: `/delete/${id}`,
        }),
};

export default ContactServices;
