// 商品リストの配列
const database = [
  { id: 1, name: '商品A', price: 100, content: '商品Aの説明が入ります。商品Aの説明が入ります。商品Aの説明が入ります。' },
  { id: 2, name: '商品B', price: 200, content: '商品Bの説明が入ります。商品Bの説明が入ります。商品Bの説明が入ります。' },
  { id: 3, name: '商品C', price: 300, content: '商品Cの説明が入ります。商品Cの説明が入ります。商品Cの説明が入ります。' }
]
// インポート先で使用できる関数をオブジェクトとしてまとめたもの
export default {
  fetch(id) {
    return database
  },
  find(id) {
    return database.find(el => el.id === id)
  },
  asyncFind(id, callback) {
    setTimeout(() => {
      callback(database.find(el => el.id === id))
    }, 1000)
  }
}