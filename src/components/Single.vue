<template>
	<div v-on:click="routeChange(item.id)">{{item.title}} {{item.id}} </div>
</template>

<script>
	export default {
		name: 'Single',
		props: ['item'],

		methods: {
			routeChange(uri){
				this.$router.push('/' + uri)
			}
		}
	}

</script>
