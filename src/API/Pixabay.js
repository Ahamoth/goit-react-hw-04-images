import axios from 'axios';

export function getPhotos(query, page = 1) {
  const params = {
    per_page: 12,
    page,
    key: '34022543-71b183f7518d21a1c8fd2ceca',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
  };

  axios.defaults.baseURL = 'https://pixabay.com';
  const data = axios.get(`/api/?`, { params }).then(data => data);
  return data;
}