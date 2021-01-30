<template>
	<b-nav vertical>
		<b-nav-item :active="routeCheck('home')"
								:disabled="routeCheck('home')"
								to="home">
			<b-icon icon="house"/><br><span class="nav-button-text">Home</span>
		</b-nav-item>
		<b-nav-item :active="routeCheck('deeds')"
								:disabled="routeCheck('deeds')"
								to="deeds">
			<b-icon icon="trophy"/><br><span class="nav-button-text">Deeds</span>
		</b-nav-item>
		<b-nav-item :active="routeCheck('hobbies')"
								:disabled="routeCheck('hobbies')"
								to="hobbies">
			<b-icon icon="bicycle"/><br><span class="nav-button-text">Hobbies</span>
		</b-nav-item>
		<b-nav-item :active="routeCheck('ideals')"
								:disabled="routeCheck('ideals')"
								to="ideals">
			<b-icon icon="book"/><br><span class="nav-button-text">Ideals</span>
		</b-nav-item>
		<b-nav-item :active="routeCheck('connect')"
								:disabled="routeCheck('connect')"
								to="connect">
			<b-icon icon="outlet"/><br><span class="nav-button-text">Connect</span>
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