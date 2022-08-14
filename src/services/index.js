import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()
const { TOKEN } = process.env

const baseURL = `https://api.telegram.org/bot${TOKEN}`

export const api = async (uriMethod, params = {}) => {
    try {
        const response = await axios.get(
            baseURL + '/' + uriMethod, {
                params,
            },
        )
        if (response.status === 200) {
            console.log(response.data.result)
            return response.data.result
        }
        return null
    } catch (e) {
        console.log('Get request error', e)
    }
}