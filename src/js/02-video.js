import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');

const player = new Vimeo.Player(iframe);

function setLocalStorage(data) {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data.seconds));
}
player.on('timeupdate', throttle(setLocalStorage, 1000));

try {
  player
    .setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY))
    .then(function (seconds) {
      JSON.parse(seconds);
    });
} catch (error) {
  console.log(error.message);
}
