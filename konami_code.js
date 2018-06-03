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
  
let index = 0


  for (let i = 0, l = codes.length; i < l; i++) {
    triggerKeyDown(codes[i]);
    }
      expect(spy.called).to.equal(true)
      expect(spy.callCount).to.equal(1)
    });

    it("does not trigger an alert if the wrong code is entered", () => {
      spy.reset()

      for (let i = 0; i < codes.length - 1; i++) {
        triggerKeyDown(codes[i])
      }
      triggerKeyDown("ArrowUp")
      
      expect(spy.notCalled).to.equal(true);
    });

for (let i = 0; i < codes.length - 1; i++) {
  return triggerKeyDown(codes[i]);
  }
}