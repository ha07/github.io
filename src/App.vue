<template>
  <div id="app">
    <nav>
      <router-link to="/" exact>Home</router-link>
      <router-link to="/product">商品情報</router-link>
       <router-link to="/plof">About</router-link>
    </nav>
    <!-- ここにパスと一致したコンポーネントが埋め込まれる -->
    <router-view />
  </div>
</template>

<style scope>
/* ナビゲーション */
nav {
  display: flex;
  align-items: center;
}
nav a {
  display: inline-block;
  padding: 20px;
  line-height: 1em;
  text-decoration: none;
  color: #222;
}

h1 {
  margin-bottom: 50px;
  font-size: 30px;
}

.product  {
  float: left;
  border: #222 solid 1px;
}
/* アクティブなリンク */
.router-link-active {
  background: #ddd;
}

.main {
    margin: 0 auto;
    max-width: 960px;
}


</style>