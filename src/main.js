// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 1
import { ApolloClient} from 'apollo-client'
//import { BatchHttpLink } from 'apollo-link-batch-http'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from "apollo-cache-inmemory"
import router from './router'
import Vue from 'vue'
// 2
import VueApollo from 'vue-apollo'

import App from './App'

Vue.config.productionTip = false

// 3

// 4
const apolloClient = new ApolloClient({
  link: new createHttpLink({
    uri: 'http://localhost:8000/graphql',
    credentials: 'include',
  }),
  cache: new InMemoryCache(),
  connectToDevTools: true
})

// 5
Vue.use(VueApollo)

// 6
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: 'loading'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  apolloProvider,
  router,
  template: '<App/>',
  components: { App }
})
