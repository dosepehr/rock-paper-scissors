const body = document.querySelector('body');
const container = document.querySelector('#objectContainer');
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
];

const ObjectsGenerator = (objectsData) => {
  objectsData.forEach(data => {
    const pElem = document.createElement('p');
    pElem.classList.add('object');
    pElem.style.top = `${data.y}px`;
    pElem.style.left = `${data.x}px`;
    pElem.innerHTML = data.content;
    container.appendChild(pElem);
  });
}


const checkCollision = (obj1, obj2, threshold = 20) => {
  const distance = Math.sqrt(Math.pow(obj1.x - obj2.x, 2) + Math.pow(obj1.y - obj2.y, 2));
  return distance < threshold;
}


const applyRule = (obj1, obj2) => {
  const rule = {
    '🪨': '✂️',  // Rock beats Scissors
    '✂️': '📄',  // Scissors beat Paper
    '📄': '🪨'   // Paper beats Rock
  };
  if (rule[obj1.content] === obj2.content) return { winner: obj1, loser: obj2 };
  if (rule[obj2.content] === obj1.content) return { winner: obj2, loser: obj1 };
  return null; // No winner if they are the same object
}

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
    };
    objectsData.push({ content: object.object, ...randomCoords });
  }
});

ObjectsGenerator(objectsData);

const changeCoords = setInterval(() => {
  container.innerHTML = ''; 

  objectsData = objectsData.map((obj) => {
    const newX = Math.max(squareStartX, Math.min(squareStartX + squareSize, obj.x + ((Math.random() - 0.5) * 30)));
    const newY = Math.max(squareStartY, Math.min(squareStartY + squareSize, obj.y + ((Math.random() - 0.5) * 30)));
    return { content: obj.content, x: newX, y: newY };
  });

  // Check for collisions and apply Rock-Paper-Scissors rule
  for (let i = 0; i < objectsData.length; i++) {
    for (let j = i + 1; j < objectsData.length; j++) {
      if (checkCollision(objectsData[i], objectsData[j])) {
        const result = applyRule(objectsData[i], objectsData[j]);
        if (result) {
          // Loser becomes the winner by taking the winner's content
          result.loser.content = result.winner.content;
        }
      }
    }
  }

  // Re-render objects
  ObjectsGenerator(objectsData);
}, 100);
