<template>
  <div id="app">
    <router-view :key="$route.name + ($route.params.id || '')"></router-view>
  </div>
</template>

<script>
import Test from './components/test'
import ContentList from './components/ContentList'
import Entry from './components/Entry'
export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
