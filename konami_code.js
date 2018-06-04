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

    
    function onKeyDownHandler(e) {
  const key = e.key;
 
  if (key === alphabet[index]) {
    index++;
 
    if (index === alphabet.length) {
      alert("Hurray!");
 
      index = 0;
    }
  } else {
    index = 0;
  }
}

  }
}