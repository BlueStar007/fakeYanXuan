import axios from 'axios'

export async function getOther() {
    let res = await axios({
        method: 'get',
        url: 'http://localhost:3000/search'
    })
    return res.data;
}