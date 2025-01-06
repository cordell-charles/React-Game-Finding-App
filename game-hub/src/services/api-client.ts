import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b9679ba2008c4c10a139abbea63fb551'
    }
})