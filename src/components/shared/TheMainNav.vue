<template>
	<b-nav vertical>
		<b-nav-item :active="routeCheck('home')"
								:disabled="routeCheck('home')"
								to="home">
			<b-icon icon="house"/><br>Home
		</b-nav-item>
		<b-nav-item :active="routeCheck('accomplishments')"
								:disabled="routeCheck('accomplishments')"
								to="accomplishments">
			<b-icon icon="trophy"/><br>Accomplishments
		</b-nav-item>
		<b-nav-item :active="routeCheck('hobbies')"
								:disabled="routeCheck('hobbies')"
								to="hobbies">
			<b-icon icon="bicycle"/><br>Hobbies
		</b-nav-item>
		<b-nav-item :active="routeCheck('connect')"
								:disabled="routeCheck('connect')"
								to="connect">
			<b-icon icon="outlet"/><br>Connect
		</b-nav-item>
		<b-nav-item :active="routeCheck('philosophies')"
								:disabled="routeCheck('philosophies')"
								to="philosophies">
			<b-icon icon="book"/><br>Philosophies
		</b-nav-item>
	</b-nav>
</template>

<script>
export default {
	name: 'TheMainNav',
	computed: {
		route () {
			return this.$route.name
		}
	},
	methods: {
		routeCheck (routeName) {
			return this.route === routeName
		}
	}
}
</script>

<style>

</style>