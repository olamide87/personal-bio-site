const projects = [
  {
    title: "Cool Project", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  },
  {
    title: "Cool Project", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: false,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  },
  {
    title: "Cool Project", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: false,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  }
];

  const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
  };

  const availableProject = () => {
    const availableProjects = [];
    projects.forEach((project) => {
    if (project.available === true){
      availableProjects.push(project);
      createProjectCards(availableProjects);
    }}
    )};
  

  const createProjectCards = (array) => {
    let domString = '';
  array.forEach(project => {
    domString += '<div class="card border-success mb-3" style="max-width: 18rem;">';
    domString += `<div class="card-header bg-transparent border-success">${project.title}</div>`;
    domString += '<div class="card-body text-success">';
    domString += '<h5 class="card-title">Success card title</h5>';
    domString += '<p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>';
    domString += '</div>';
    domString += '<div class="card-footer bg-transparent border-success">Footer</div>';
    domString += '</div>';
  });
  printToDom('projectsPage', domString);
  }

   const init = () => {
    availableProject();
   }


  init();
