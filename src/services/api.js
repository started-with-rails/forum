import axios from 'axios';

export default axios.create({
  baseURL: `http://localhost:3000/`,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  // headers: {
  //   'content-type':'application/octet-stream',
  //   'x-rapidapi-host':'example.com',
  //   'x-rapidapi-key': process.env.RAPIDAPI_KEY
  // },
});