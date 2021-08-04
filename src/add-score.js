import { addInfo } from './display-table';

const sendData = (name, score) => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/EO65suUhDU47wLiHboGe/scores/', {
    method: 'POST',
    body: JSON.stringify({ user: name, score }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json());
};

const addScore = () => {
  const name = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;
  sendData(name, score);
  addInfo(name, score);
};

export default addScore;