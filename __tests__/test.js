const measure = require("../src/measure.js");

test('basic construction', () => {
  var m = measure("10px")
  expect(m()).toBe("10px");
  expect(m.value()).toBe(10);
  expect(m.unit()).toBe("px");

  var m2 = measure("   10px    ")
  expect(m2()).toBe("10px");
  expect(m2.value()).toBe(10);
  expect(m2.unit()).toBe("px");
});


test('mutation', () => {
  var m = measure("10px")
  expect(m(20)).toBe("20px");
  expect(m()).toBe("20px");
  expect(m.value()).toBe(20);
  expect(m.unit()).toBe("px");
  expect(m()).toBe("20px");

  expect(m.value(30)()).toBe("30px");
  expect(m()).toBe("30px");
  expect(m.value()).toBe(30);
  expect(m.unit()).toBe("px");

  expect(m.unit("rem")()).toBe("30rem");
  expect(m()).toBe("30rem");
  expect(m.value()).toBe(30);
  expect(m.unit()).toBe("rem");


  expect(m.add(10)()).toBe("40rem");
  expect(m()).toBe("40rem");
  expect(m.value()).toBe(40);
  expect(m.unit()).toBe("rem");

  expect(m.add(-20)()).toBe("20rem");
  expect(m()).toBe("20rem");
  expect(m.value()).toBe(20);
  expect(m.unit()).toBe("rem");

  expect(m.mult(2)()).toBe("40rem");
  expect(m()).toBe("40rem");
  expect(m.value()).toBe(40);
  expect(m.unit()).toBe("rem");

  expect(m.mult(.5)()).toBe("20rem");
  expect(m()).toBe("20rem");
  expect(m.value()).toBe(20);
  expect(m.unit()).toBe("rem");
});

test('edge case - unitless', () => {
  var m = measure("10")
  expect(m()).toBe("10");
  expect(m.value()).toBe(10);
  expect(m.unit()).toBe("");
});

test('edge case - empty', () => {
  var m = measure("")
  expect(m()).toBe("0");
  expect(m.value()).toBe(0);
  expect(m.unit()).toBe("");
});


test('edge case - valueless', () => {
  var m = measure("px")
  expect(m()).toBe("0px");
  expect(m.value()).toBe(0);
  expect(m.unit()).toBe("px");
});

test('edge case - malformed', () => {
  var m = measure("10 px")
  expect(m()).toBe("0");
  expect(m.value()).toBe(0);
  expect(m.unit()).toBe("");
});
