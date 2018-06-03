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
  // your code here
for (let i = 0; i < codes.length - 1; i++) {
  return triggerKeyDown(codes[i])
}
}

function capture(e) {
  console.log(this.firstChild.nodeValue.trim() + ' captured');
}
 
for (let i = 0; i < codes.length; i++) {
 
  return triggerKeyDown (codes[i]).addEventListener('click', capture, true);
}