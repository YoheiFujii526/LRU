//lrucacheクラスを作成
class Lrucache {
  //max_capacityは最大容量
  constructor(max_capacity) {
    this.max_capacity = max_capacity;
    this.map = new Map();//この配列にデータを入れる
  }
  //getメソッド
  get(key) {
    const data = this.map.get(key);
    //指定のデータが見つからないときはnullを返す
    if(this.map.has(key) == false) {
      return null;
    } else {
      //一回取り出すデータを消してまた追加することで、取り出したデータを一番新しいデータとしている
      this.map.delete(key);
      this.map.set(key);
      return data;//取り出されたデータを返す
    }
  }
  //putメソッド
  put(key, data) {
    //追加するデータをまだ持っていない時
    if(this.map.has(key) == false) {
      //データの数がmax_capacityを超えていない時
      if(this.map.size < this.max_capacity) {
        this.map.set(key, data);
      //データの数がmax_capacityのとき
      } else {
        const keysArray = Array.from(this.map.keys());//削除する一番最初の要素のkeyをkeysArray配列に格納
        this.map.delete(keysArray[0]);//一番最初のデータを削除
        this.map.set(key, data);
      }
    //追加するデータをすでに持っている時
    } else {
      //データを最新に更新する
      this.map.delete(key);
      this.map.set(key, data);
    }
  }
}

/*function sum(a, b) {
    return a + b;
}*/
module.exports = Lrucache;