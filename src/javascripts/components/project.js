import util from '../helpers/utils';
import projects from '../helpers/data/bioData';
import 'bootstrap';
import '../../Styles/main.scss';

const createProjectCards = (array) => {
  let domString = '';
  array.forEach((project) => {
    domString += '<div class="card border-success mb-3" style="max-width: 18rem;">';
    domString += `<div class="card-header bg-transparent border-success">${project.title}</div>`;
    domString += '<div class="card-body text-success">';
    domString += '<h5 class="card-title">Success card title</h5>';
    domString += '<p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>';
    domString += '</div>';
    domString += '<div class="card-footer bg-transparent border-success">Footer</div>';
    domString += '</div>';
  });
  util.printToDom('projectsPage', domString);
};

const availableProject = () => {
  const availableProjects = [];
  projects.getProjects.forEach((project) => {
    if (project.available === true) {
      availableProjects.push(project);
      createProjectCards(availableProjects);
    }
  });
};

export default {
  availableProject,
};