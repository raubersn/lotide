const countOnly = require('../countOnly');
const assert = require('chai').assert;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe("#countOnly", () => {
  it("returns 1 for Jason on countOnly(firstNames, { \"Jason\": true, \"Karima\": true, \"Fang\": true, \"Agouhanna\": false }", () => {
    assert.strictEqual(result1["Jason"], 1);
  });
  it("returns undefined for Karima on countOnly(firstNames, { \"Jason\": true, \"Karima\": true, \"Fang\": true, \"Agouhanna\": false }", () => {
    assert.strictEqual(result1["Karima"], undefined);
  });
  it("returns 2 for Fang on on countOnly(firstNames, { \"Jason\": true, \"Karima\": true, \"Fang\": true, \"Agouhanna\": false }", () => {
    assert.strictEqual(result1["Fang"], 2);
  });
  it("returns undefined for Agouhanna on countOnly(firstNames, { \"Jason\": true, \"Karima\": true, \"Fang\": true, \"Agouhanna\": false }", () => {
    assert.strictEqual(result1["Agouhanna"], undefined);
  });
});