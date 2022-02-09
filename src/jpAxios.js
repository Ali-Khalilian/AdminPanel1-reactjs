import axios from "axios";

const jpAxios = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
    timeout:5000,
    timeoutErrorMessage:"There is no data Found... "
});

export default jpAxios;