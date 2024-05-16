//lrucacheクラスを作成
class LRUcache {
  //max_capacityは最大容量
  constructor(max_capacity) {
    this.max_capacity = max_capacity;
  }
  //メッソドの実験
  increment() {
    this.max_capacity++;
    return this.max_capacity;
  }
}

/*function sum(a, b) {
    return a + b;
}*/
module.exports = LRUcache;