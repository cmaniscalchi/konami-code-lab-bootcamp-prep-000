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
  
  let index = 0;
  
  document.addEventListener('keyDown', function(e)) {
  alert('I was clicked!')
};
 
 
  for (let i = 0; i < codes.length - 1; i++) {
    index.push(codes[i]);
}
}