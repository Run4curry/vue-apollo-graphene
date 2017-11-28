import Vue from 'vue'
import Router from 'vue-router'

// 1
//import CreateLink from '../components/CreateLink'
//import LinkList from '../components/LinkList'
import ContentList from '../components/ContentList'
import Entry from '../components/Entry'
Vue.use(Router)

export default new Router({
  // 2
  routes: [
    {
      path: '/',
      component: Entry
    },
    {
      path: '/:id',
      component: ContentList,
      name: 'content-list',
    }
  ],
  // 3
  mode: 'history'
})
