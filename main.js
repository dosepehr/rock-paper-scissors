const objects = [
  {
    object: 'r',
    count: 20
  },
  {
    object: 'p',
    count: 20
  },
  {
    object: 's',
    count: 20
  },
]
const sizes = {
  w: window.innerWidth,
  h: window.innerHeight,
};

objects.forEach(object => {
  for (let i = 0; i < object.count; i++) {
    const randomPosition = { x: Math.random() * sizes.w, y: Math.random() * sizes.h }
    console.log(object.object, randomPosition)
  }
})