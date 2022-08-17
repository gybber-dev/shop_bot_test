import axios from 'axios'

const url = 'http://localhost:3000'

const app = async (url) => {
    try {
        const res = await axios.get(url)
        console.log('res', res)
        if (res.status === 200) {
            console.log('GET request was sent to ', url, res)
        }
    } catch(e) {
        console.log(e)
    }
}

app(url)