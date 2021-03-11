import axios from 'axios';

export default axios.create({
  baseURL: `http://localhost:3001/`,
  // headers: {
  //   'content-type':'application/octet-stream',
  //   'x-rapidapi-host':'example.com',
  //   'x-rapidapi-key': process.env.RAPIDAPI_KEY
  // },
});