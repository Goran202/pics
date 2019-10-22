import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID e9de68bcf4cd172687019b0132f5ef800ac9fbd5fec7063447cacc0caaaaa133',
  },
});

// export default axios;
