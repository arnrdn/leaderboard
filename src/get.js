const getScores = async () => {
  const info = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/HOrqrnUlQ75hDZvoh0DM/scores');
  const json = await info.json();
  return json;
};

export default () => {
  const unLi = document.querySelector('ul');
  getScores().then((json) => {
    const infoArr = json.result;
    console.log(infoArr);
    for (let i = 0; i < infoArr.length; i += 1) {
      unLi.innerHTML += `<li>${infoArr[i].user}: ${infoArr[i].score}</li>`;
    }
  });
};