function parallaxEffect () {
  const astronaut = document.querySelector('.parallax__astronaut');

  const layer0 = document.querySelector('.parallax__layer0');
  const layer1 = document.querySelector('.parallax__layer1');
  const layer2 = document.querySelector('.parallax__layer2');
  const layer3 = document.querySelector('.parallax__layer3');
  const layer4 = document.querySelector('.parallax__layer4');
  const layer5 = document.querySelector('.parallax__layer5');

  const title = document.querySelector('.text__parallax')
  
  let value = window.scrollY;

  title.style.top = `${- value * .9}px`
  astronaut.style.bottom = `${- value * .09}px`;
 

  // layer0.style.top = `${ -value * .09}px`;
  layer0.style.transform = `scale(${ value * .0009})`;

  layer1.style.top = `${ value * .09}px`;
  layer1.style.transform = `rotateZ(${- value * .00009}deg)`;

  layer2.style.transform = `scale(${ value * .0009})`;
  
  layer3.style.top = `${- value * .5}px`;
  layer3.style.transform = `rotateZ(${ -value * .09}deg)`;
  
  layer4.style.top = `${- value * .3}px`;
  // layer4.style.transform = `scale(${ value * .009})`;
  
  layer5.style.top = `${- value * .2}px`;
}

window.addEventListener('scroll', parallaxEffect)