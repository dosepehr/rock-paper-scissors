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

const squareSize = 400;
const sizes = {
  w: window.innerWidth,
  h: window.innerHeight,
};

const squareStartX = (sizes.w / 2) - (squareSize / 2);
const squareStartY = (sizes.h / 2) - (squareSize / 2);

let objectsData = [];

objects.forEach(object => {
  for (let i = 0; i < object.count; i++) {
    const randomCoords = { 
      x: squareStartX + Math.random() * squareSize,  
      y: squareStartY + Math.random() * squareSize  
    }
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
    const newX = Math.max(squareStartX, Math.min(squareStartX + squareSize, obj.x + ((Math.random() - 0.5) * 10)));
    const newY = Math.max(squareStartY, Math.min(squareStartY + squareSize, obj.y + ((Math.random() - 0.5) * 10)));
    return { content: obj.content, x: newX, y: newY };
  });

  ObjectsGenerator(newCoords);
}, 100);
