const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  
  const sequence = [];
 
  for (let i = 0; i < codes.length - 1; i++) {
  triggerKeyDown(codes[i]);
}
}