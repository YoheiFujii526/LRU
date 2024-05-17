const Lrucache = require('./sum');

test('三つのデータを追加して一番最初に追加したデータを取り出そうとした時', () => {
  const lrucache = new Lrucache(2);
  lrucache.put("a", "dataA");
  lrucache.put("b", "dataB");
  lrucache.put("c", "dataC");
  expect(lrucache.get("a")).toBe(null);
});

test('dataA追加→dataB追加→dataA取り出し→dataC追加→dataB取り出し', () => {
  const lrucache = new Lrucache(2);
  lrucache.put("a", "dataA");
  lrucache.put("b", "dataB");
  expect(lrucache.get("a")).toBe("dataA");
  lrucache.put("c", "dataC");
  expect(lrucache.get("b")).toBe(null);
});