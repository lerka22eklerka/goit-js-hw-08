import vimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';
    
const iframe = document.querySelector('iframe');
const player = new vimeoPlayer(iframe);

// console.log(player);
player.on('timeupdate', throttle(onTimePlayer, 1000));

function onTimePlayer(data) {
    // console.log(data);
    const { seconds } = data;
    localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));    
};

const getTime = localStorage.getItem('videoplayer-current-time');
const saveTime = JSON.parse(getTime);

if (saveTime) {
 player.setCurrentTime(JSON.parse(saveTime));
}
  // console.log(saveTime);

 



