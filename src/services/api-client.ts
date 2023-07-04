import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '433bc1f07f874ff9b1f27a7c57e9bb74'
    }
})