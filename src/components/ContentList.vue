<template>
	<div>
		<h1>{{$route.params.id}} </h1>
		<h4 v-if="loading">Loading...</h4>
		<Single
			v-for="item in contentNode.children"
			:key="item.id"
			:item="item"
		>
		</Single>
	</div>
</template>


<script>
	import {CONTENT_CHILDREN_QUERY} from '../constants/graphql'
	import Single from './Single'

	export default {
		name: 'ContentList',
		data() {
			return {
				contentNode : [],
				loading: 0,
				param : this.$route.params.id,
			}

		},
		components: {
			Single
		},
		apollo: {
			contentNode: {
				query : CONTENT_CHILDREN_QUERY,
				variables() {
					return {
						id: this.param,
					}
				},
			},
		},
	}
</script>
