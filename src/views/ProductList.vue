<template>
  <div class="product-list main">
    <h1>商品一覧</h1>
    <ul>
      <li v-for="{ id, name } in list" :key="id"><div><p>{{ name }}</p>
        <router-link :to="`/product/${ id }`">詳細はコチラ</router-link>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
  import lists from '@/views/lists.js'
  export default {
    computed: {
      list: () => lists.fetch()
    }
  }
</script>

<style scoped>
.product-list {
  width: 960px;
  margin: 0 auto;
}
ul {
  list-style: none;
  padding: 0;
}
.product-list li {
  float: left;
  margin: 0 10px;
}
.product-list p {
  text-align: center;
}

.product-list a {
    display: block;
    padding: 12px 0;
    width: 200px;
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 20px;
    text-align: center;
    text-decoration: none;
    border: #c71f3b 1px solid;
    background: #fff;
    color: #c71f3b;
}
</style>