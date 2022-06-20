import _ from 'lodash';
import 'bootstrap';
import './style.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

// document.body.appendChild(component());