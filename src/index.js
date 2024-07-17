import axios from 'axios';


async function fetchData({url, method, payload, token}) {
    const toLowerCase = method.toLowerCase();
    const config = {
        headers: {}
    };

    if (token) {
        config.headers = {
            'Authorization': `Bearer ${token}`
        };
    }

    try {
        let response;
        switch (toLowerCase) {
            case 'get':
                response = await axios.get(url, config);
                break;
            case 'post':
                response = await axios.post(url, payload, config);
                break;
            case 'put':
                response = await axios.put(url, payload, config);
                break;
            case 'delete':
                response = await axios.delete(url, config);
                break;
            default:
                throw new Error(`Unsupported method: ${method}`);
        }
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching data from ${url} using ${method}: ${error.message || error}`);
    }
}

export default fetchData;
