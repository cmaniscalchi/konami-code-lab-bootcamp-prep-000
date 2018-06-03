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
  
  var index = 0;
  
  document.addEventListener('keyDown');
 
 
  for (let i = 0; i < codes.length - 1; i++) {
    index.push(codes[i]);
}
}