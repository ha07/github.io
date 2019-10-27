<template>
  <div class="product main" v-if="item" key="product">
    <table>
      <h1>商品情報</h1>
      <tbody class="product-table">
        <tr>
          <th>商品名</th>
          <td>{{ item.name }}</td>
        </tr>
        <tr>
          <th>価格</th>
          <td>{{ item.price }}円</td>
        </tr>
        <tr>
          <th>商品説明</th>
          <td>{{ item.content }}</td>
        </tr>
      </tbody>
    </table>
  </div>
    <div v-else key="loading">商品情報を読み込んでいます...</div>
</template>



<script>
  import products from '@/views/lists.js'
  export default {
    props: {
      id: Number
    },
    data() {
      return {
        item: null
      }
    },
    watch: {
      id: {
        handler() {
          products.asyncFind(this.id, item => {
            this.item = item
          })
        },
        immediate: true
      }
    }
  }
</script>

<style scope>
.product {
  padding-top: 20px;
  padding: 10px;
  border: none;
}
th {
  padding: 13px 20px 13px;
  border-top: #aca8a5 1px dotted;
  width: 150px;
  box-sizing: border-box;
  background: #f6ecec;
}
td {
  padding: 13px 20px 13px;
  border-top: #aca8a5 1px dotted;
  background: #fdfafa;
}
</style>