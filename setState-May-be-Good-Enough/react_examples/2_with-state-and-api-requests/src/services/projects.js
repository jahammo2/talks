import api from './api';

function getAll() {
  return api
    .get('/projects')
    .then(({ data }) => data.data);
}

export default {
  getAll
};
