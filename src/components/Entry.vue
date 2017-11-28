<template>
    <div>
      <div v-on:click="routeChange(dummy)">{{dummy}}</div>
    </div>
</template>

<script>
  export default {
    name: 'Entry',
    data() {
      return {
        dummy : '17d7606476bd52f4ac94bd76b6f3aa8c',
      }
    },
    methods: {
      routeChange(uri) {
        this.$router.push('/' + uri)
      }
    }
  }
</script>
