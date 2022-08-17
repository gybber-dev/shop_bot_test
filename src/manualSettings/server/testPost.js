import axios from "axios";

const url = 'http://localhost:3000'
const headers = {
    'Content-Type': 'application/json'
}

const test = async (url) => {
    try {
        const res = await axios.post(url, {
            update_id: 234,
            message: 'test'
        }, { headers })

        if (res.status === 200) {
            console.log('POST request was sent to ', url)
        }
    } catch(e) {
        console.log(e)
    }
}

test(url)