const getUsers = async () => {
  const request = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/EO65suUhDU47wLiHboGe/scores/');
  const data = await request.json();
  return data;
};

export function addInfo(user, score) {
  const table = document.querySelector('.table');
  const tableRow = document.createElement('tr');
  const tableName = document.createElement('td');
  tableName.innerHTML = user;
  tableRow.appendChild(tableName);
  const tableScore = document.createElement('td');
  tableScore.innerHTML = score;
  tableRow.appendChild(tableScore);
  table.appendChild(tableRow);
}

export async function displayTable() {
  const ans = await getUsers();
  const userArr = ans.result;
  for (let i = 0; i < userArr.length; i += 1) {
    addInfo(userArr[i].user, userArr[i].score);
  }
}