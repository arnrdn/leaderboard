const postScores = async (user, score) => {
  const info = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/HOrqrnUlQ75hDZvoh0DM/scores', {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const json = await info.json();
  return json;
};

export default () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userGet = document.querySelector('#name');
    const user = userGet.value;
    const scoreGet = document.querySelector('#score');
    const score = scoreGet.value;
    postScores(user, score);
    form.reset();
  });
};