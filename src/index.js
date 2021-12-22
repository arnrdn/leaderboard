import './style.css';
import post from './post.js';
import get from './get.js';

const refresh = document.querySelector('button[type="button"]');

refresh.addEventListener('click', () => {
  const unLi = document.querySelector('ul');
  while (unLi.firstChild) {
    unLi.removeChild(unLi.firstChild);
  }
  get();
});

get();
post();