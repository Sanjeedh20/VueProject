import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import CreateUser from './components/CreateUser.vue'
//import UserDetails from './components/UserDetails.vue'
import Summary_Detail from './components/Summary_Detail.vue'
import Header_comp from './components/Header_comp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component : Header_comp
  },
  {
    path:'/create',
    component : CreateUser
  },
  {
    path: '/user/:id',   
    name: 'Summary',
    component: Summary_Detail
  }
]

const router = new VueRouter({
  mode : 'history',
  routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
