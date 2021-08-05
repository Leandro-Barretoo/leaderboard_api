/* eslint-disable object-shorthand */
/* eslint-disable max-len */

import { addInfo } from './display-table';

const sendData = async (name, score) => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jmUrERqBJAHRA8tmbVtb/scores/', {
    method: 'POST',
    body: JSON.stringify({ user: name, score: score }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json());
};

const addScore = async () => {
  const name = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;
  const regex = /(.*[a-z]){3}/i;
  const alerts = document.querySelectorAll('.alerts');

  if (name.length >= 3 && name.length <= 20 && name.match(regex) && score < 10000 && score >= 0 && score.length > 0) {
    await sendData(name, score);
    addInfo(name, score);
    alerts.forEach((item) => {
      item.style.display = 'none';
    });
  } else {
    alerts.forEach((item) => {
      item.style.display = 'block';
    });
  }
};

export default addScore;

/* eslint-enable object-shorthand */
/* eslint-enable max-len */