import axios from 'axios'

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID Q_B91-0TM1KXoYiT3J9vYNH5ZnsX47EP96ZiUo3tMjE',
        },
        params: {
            query: term,
        }
    })

    return response.data.results;
};

export default searchImages;