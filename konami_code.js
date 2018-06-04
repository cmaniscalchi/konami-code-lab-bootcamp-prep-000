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

for (let i = 0; i < codes.length - 1; i++) {
  triggerKeyDown(codes[i]);
}
triggerKeyDown("ArrowUp");
}
