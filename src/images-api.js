import axios from 'axios';
const ACCESS_KEY = 'MWRqbg98yppLHLBqEia6MuiVEzqRtgJRE5Pae0mD3d8';

axios.defaults.baseURL = 'https://api.unsplash.com/';

export const fetchImages = async (search, currentPage) => {
 
      const response = await axios.get('search/photos', {
          params: {
              query: search,
              client_id: ACCESS_KEY,
              orientation: 'landscape',
              page: currentPage,
              per_page: 15,
          }
      });
      return {
          results: response.data.results || [],
          total_pages: response.data.total_pages || 0,
      };
 
};