import { addInfo } from './display-table';

const sendData = async (name, score) => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/d9dwZQRTRj3m1AqR6ORz/scores/', {
    method: 'POST',
    body: JSON.stringify({ user: name, score }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json());
};

const addScore = async () => {
  const name = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;
  await sendData(name, score);
  addInfo(name, score);
};

export default addScore;