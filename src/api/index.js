import axios from 'axios';

export default class Api {
    static getCurrency = async () => {
        const response = await axios.get('http://www.cbr-xml-daily.ru/daily_json.js').then(data => JSON.parse(data.request.response))
        return response
    }
}