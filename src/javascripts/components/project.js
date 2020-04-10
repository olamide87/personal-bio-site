import projectsData from '../helpers/data/projectData';
import utils from '../helpers/utils';
import projectComponent from './projectCard';

const buildProjectBoard = () => {
  projectsData.getProjects()
    .then((projects) => {
      let domString = '';
      console.error(projects);
      // domString += '<div class="d-flex flex-wrap">';
      projects.forEach((project) => {
        domString += projectComponent.createProjectCards(project);
      });
      // domString += '</div>';
      utils.printToDom('card-container', domString);
    })
    .catch((err) => console.error('get projects broke', err));
};

export default { buildProjectBoard };
