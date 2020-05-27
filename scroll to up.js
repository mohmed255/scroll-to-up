var p1 = document.getElementById('p1'),
    p2 = document.getElementById('p2'),
    button = document.getElementById('button');

window.onscroll = function () {
  'use strict';
  console.log(window.pageYOffset);
  
  if (window.pageYOffset >= 116){
    p2.style.display = 'block';
    button.style.display = 'block';
  }else{
    p2.style.display = 'none';
    button.style.display = 'none';
  }
};

button.onclick = function () {
    window.scroll(0, 0);
}

