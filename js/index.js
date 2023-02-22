const trailer = document.getElementById('mouse_trailer');

const animateTrailer = (e, intracting, intracting2) => {
    const x = e.clientX - trailer.offsetWidth / 2
    y= e.clientY - trailer.offsetHeight / 2


  intracting ? trailer.style.backgroundColor = '#ffffff6e' : trailer.style.backgroundColor =  '#d2992e'
  intracting ? trailer.innerHTML = `
  <img src="./assets/north.svg" alt="">` : trailer.innerHTML =  ''
    const keyFrame = intracting ? { transform :`translate(${x}px, ${y}px) scale(${intracting ? 8 : 1})`} : { transform :`translate(${x}px, ${y}px) scale(${intracting2 ? 5 : 1})`}
    trailer.animate(keyFrame, {
        duration: 1000,
        fill: "forwards"
    })
}



let moseEvents = 
  e => {
    // mover tracker postion as mouse moves
    const interactable = e.target.closest('.interactable')
    intracting = interactable !== null
    const interactable2 = e.target.closest('.interactable2')
    intracting2 = interactable2 !== null
    animateTrailer(e, intracting, intracting2)
}

window.addEventListener('mousemove', e => moseEvents(e)) // listening on mouse move event

const wrapper = document.getElementById('project-wrapper');

let rand = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
setInterval(() => {
    wrapper.dataset.configuration = 1
    wrapper.dataset.roundness = rand(1, 4)
}, 1000)


// const currentTime =  Date.now()
    
// const expiryTime = Date.now()

// if (currentTime - expiryTime === 0 ) {
//     console.log('not expired')
// }