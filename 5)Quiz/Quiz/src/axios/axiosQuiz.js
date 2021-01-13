import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-quiz-minin-2d075-default-rtdb.firebaseio.com/'
})