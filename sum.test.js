const LRUcache = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  const lrucache = new LRUcache(2);
  expect(lrucache.increment()).toBe(3);
});