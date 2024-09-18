const objects = [
  {
    object: '🪨',
    count: 20
  },
  {
    object: '📄',
    count: 20
  },
  {
    object: '✂️',
    count: 20
  },
]
const sizes = {
  w: window.innerWidth,
  h: window.innerHeight,
};
const body = document.querySelector('body')
objects.forEach(object => {
  for (let i = 0; i < object.count; i++) {
    const randomCoords = { x: Math.random() * sizes.w, y: Math.random() * sizes.h }
    const pElem = document.createElement('p')
    pElem.classList.add('object')
    pElem.style.top = `${randomCoords.y}px`
    pElem.style.left = `${randomCoords.x}px`
    pElem.innerHTML = object.object
    body.appendChild(pElem)
  }
})