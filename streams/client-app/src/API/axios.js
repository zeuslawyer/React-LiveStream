import axios from 'axios';

const URL = 'http://localhost:3001'

export default axios.create({
    baseURL: URL,
    timeout: 500
  });