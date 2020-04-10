import utils from '../helpers/utils';


const tech = () => {
  let domString = '';
  domString += '<div class="title"><h1 class="text-center">Here Is What I Use</h1></div>';
  domString += '<div class="container-fluid"><div class="row">';
  domString += '<div class="col-md-4">';
  domString += '<div class="tech text-center">';
  domString += '<i class="fab fa-html5"></i>';
  // eslint-disable-next-line max-len
  domString += '<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam error eius sapiente, cum nobis aliquam? Officia aspernatur assumenda quam perspiciatis, omnis animi laudantium veritatis at optio nemo ea consectetur quisquam?</p>';
  domString += '</div>';
  domString += '</div>';

  domString += '<div class="col-md-4">';
  domString += '<div class="tech text-center">';
  domString += '<i class="fab fa-css3-alt"></i>';
  // eslint-disable-next-line max-len
  domString += '<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam error eius sapiente, cum nobis aliquam? Officia aspernatur assumenda quam perspiciatis, omnis animi laudantium veritatis at optio nemo ea consectetur quisquam?</p>';
  domString += '</div>';
  domString += '</div>';

  domString += '<div class="col-md-4">';
  domString += '<div class="tech text-center">';
  domString += '<i class="fab fa-js"></i>';
  // eslint-disable-next-line max-len
  domString += '<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam error eius sapiente, cum nobis aliquam? Officia aspernatur assumenda quam perspiciatis, omnis animi laudantium veritatis at optio nemo ea consectetur quisquam?</p>';
  domString += '</div>';
  domString += '</div>';

  domString += '<div class="col-md-4">';
  domString += '<div class="tech text-center">';
  domString += '<i class="fab fa-react"></i>';
  // eslint-disable-next-line max-len
  domString += '<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam error eius sapiente, cum nobis aliquam? Officia aspernatur assumenda quam perspiciatis, omnis animi laudantium veritatis at optio nemo ea consectetur quisquam?</p>';
  domString += '</div>';
  domString += '</div>';

  domString += '<div class="col-md-4">';
  domString += '<div class="tech text-center">';
  domString += '<i class="fab fa-bootstrap"></i>';
  // eslint-disable-next-line max-len
  domString += '<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam error eius sapiente, cum nobis aliquam? Officia aspernatur assumenda quam perspiciatis, omnis animi laudantium veritatis at optio nemo ea consectetur quisquam?</p>';
  domString += '</div>';
  domString += '</div>';

  domString += '<div class="col-md-4">';
  domString += '<div class="tech text-center">';
  domString += '<i class="fab fa-github-alt"></i>';
  // eslint-disable-next-line max-len
  domString += '<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam error eius sapiente, cum nobis aliquam? Officia aspernatur assumenda quam perspiciatis, omnis animi laudantium veritatis at optio nemo ea consectetur quisquam?</p>';
  domString += '</div>';
  domString += '</div>';
  utils.printToDom('technologiesPage', domString);
};


export default { tech };
