import fetch from "unfetch";

const checkStatus = response => {
    if(response.ok){
        return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    return Promise.reject(error);
}

export const getAllData = () =>
    fetch(`api/v1/all`)
        .then(checkStatus);

export const sendEmails = () =>
    fetch(`api/v1/emails`)
        .then(checkStatus);

export const getSku = (sku) =>
    fetch(`/api/v1/sku/${sku}`)
        .then(checkStatus);

export const getManufacturer = (manufacturer) =>
    fetch(`/api/v1/${manufacturer}`)
        .then(checkStatus);