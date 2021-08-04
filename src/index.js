import './style.css';
import addScore from './add-score';
import { displayTable } from './display-table';

const submit = document.querySelector('.submit');
const refresh = document.querySelector('.refresh');

displayTable();

submit.addEventListener('click', (e) => {
  e.preventDefault();
  addScore();
  document.querySelector('form').reset();
});

refresh.addEventListener('click', (e) => {
  e.preventDefault();
  const tableToDelete = document.querySelector('.table');
  tableToDelete.innerHTML = '';
  displayTable();
});