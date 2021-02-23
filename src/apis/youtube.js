import axios from 'axios'
const KEY = 'AIzaSyAtCSu4P-NFhZ_h065Vbej5aZnshc3IZyQ'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
});


