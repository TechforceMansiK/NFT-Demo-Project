import API from '../api/Api';

export default function getDummyData (url) {
    return API.get(url)
}
