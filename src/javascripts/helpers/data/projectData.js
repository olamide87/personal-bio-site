import axios from 'axios';
import apikeys from '../apikeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects.json`)
    .then((response) => {
      const olaProjects = response.data;
      const projects = [];
      Object.keys(deezProjects).forEach((projectId) => {
        olaProjects[projectId].id = projectId;
        projects.push(olaProjects[projectId]);
      });
      resolve(projects);
    })
    .catch((err) => reject(err));
});

export default { getProjects };
