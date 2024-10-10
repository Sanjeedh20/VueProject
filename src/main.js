import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Header_comp from './components/Header_comp.vue'
import CreateUser from './components/CreateUser.vue'
import UserDetails from './components/UserDetails.vue'
//import Get_comp from './components/Get_comp.vue'
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
    name: 'UserDetails',
    component: UserDetails
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
