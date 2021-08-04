import Vue from 'vue'
import Router from 'vue-router'
import Catalog from '../components/catalog/Catalog.vue'
import Cart from '../components/cart/Cart.vue'
import Main from '../components/mainpage/Main.vue'

Vue.use(Router)

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main
        },
        {
            path: '/catalog',
            name: 'Catalog',
            component: Catalog
        },
        {
            path: '/cart',
            name: 'Cart',
            component: Cart,
            props: true
        }
    ]
})

export default router