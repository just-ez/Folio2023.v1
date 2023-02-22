
const preloader = document.getElementById('preloader')
const fadeOutEffect = setInterval(() => {

    if (!preloader.style.opacity) {
      preloader.style.opacity = 1;
      // document.style.overflowY = 'scroll'
    }
    if (preloader.style.opacity > 0) {
      preloader.style.opacity -= 1;
      preloader.style.zIndex = -1
      // document.style.overflowY = 'hidden'
    } else {
      clearInterval(fadeOutEffect);
    }
  }, 6000);
  
window.addEventListener('load', fadeOutEffect)