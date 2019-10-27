import Vue from 'vue'
import VueRouter from 'vue-router'


// ルート用のコンポーネントを読み込む
import Home from '@/views/Home'
import Product from '@/views/Product'
import ProductList from '@/views/ProductList'
import Plof from '@/views/Plof'

// Vuexと同様で最初にプラグインとして登録
Vue.use(VueRouter)

// VueRouterインスタンスを生成する
const router = new VueRouter({
  // URLのパスと紐づくコンポーネントをマッピング
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/product', // IDが付いていないときはリストを表示
      component: ProductList
    },
    {
      path: '/product/:id', // 「:id」がパラメータ 何が入ってもOK
      component: Product,
      props: route => ({ id: Number(route.params.id )})
    },
    {
      path: '/plof',
      component: Plof
    }
  ]
})
// 生成したVueRouterインスタンスをエクスポート
export default router