const body = document.querySelector('body')
const container = document.querySelector('#objectContainer')
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
let objectsData = [];
objects.forEach(object => {
  for (let i = 0; i < object.count; i++) {
    const randomCoords = { x: Math.random() * sizes.w, y: Math.random() * sizes.h }
    objectsData.push({ content: object.object, ...randomCoords })
  }
})

const ObjectsGenerator = (objectsData) => {
  objectsData.forEach(data => {
    const pElem = document.createElement('p')
    pElem.classList.add('object')
    pElem.style.top = `${data.y}px`
    pElem.style.left = `${data.x}px`
    pElem.innerHTML = data.content
    container.appendChild(pElem)
  })
}


ObjectsGenerator(objectsData)

const changeCoords = setInterval(() => {
  container.innerHTML = '';
  const newCoords = objectsData.map((obj) => {
    return { content: obj.content, x: obj.x + ((Math.random() - 0.5) * 10), y: obj.y + ((Math.random() - 0.5) * 10) }
  });

  ObjectsGenerator(newCoords)
}, 100);
