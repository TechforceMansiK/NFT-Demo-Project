import axios from 'axios';

const API = axios.create({
    baseURL: `${process.env.REACT_APP_OPENSEA_BASE_URL}`
});

// Request Interceptors
API.interceptors.request.use(function (request) {
    return request;
}, function (error) {
    alert(error);
    // Do something with response error
    return Promise.reject(error);
});

// Response Interceptors
API.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if ('Error: Network Error'.includes(error)) {
        // It checks whether the server is down if it downs then give alert
        // alert("Services are unavailable temporarily, Please try after some time");
    }
    console.error(error);
    // Do something with response error
    return Promise.reject(error);
});

export default API;