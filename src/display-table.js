const getUsers = async () => {
  const request = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jmUrERqBJAHRA8tmbVtb/scores/');
  const data = await request.json();
  return data;
};

export const addInfo = (user, score) => {
  const table = document.querySelector('.table');
  const tableRow = document.createElement('tr');
  const tableName = document.createElement('td');
  tableName.innerHTML = user;
  tableRow.appendChild(tableName);
  const tableScore = document.createElement('td');
  tableScore.innerHTML = score;
  tableRow.appendChild(tableScore);
  table.appendChild(tableRow);
};

export const displayTable = async () => {
  const ans = await getUsers();
  const userArr = ans.result;
  userArr.forEach((item) => {
    addInfo(item.user, item.score);
  });
};