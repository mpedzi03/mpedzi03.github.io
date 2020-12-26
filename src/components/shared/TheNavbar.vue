<template>
	<div>
		<b-nav vertical class="w-100">
			<b-nav-item :disabled="this.$route.name === 'home'"				to="home" 			>Home</b-nav-item>
			<b-nav-item :disabled="this.$route.name === 'accomplishments'" 	to="accomplishments">Accomplishments</b-nav-item>
			<b-nav-item :disabled="this.$route.name === 'hobbies'"			to="hobbies" 		>Hobbies</b-nav-item>
			<b-nav-item :disabled="this.$route.name === 'connect'"			to="connect" 		>Connect</b-nav-item>
			<b-nav-item :disabled="this.$route.name === 'philosophies'"		to="philosophies" 	>Philosophies</b-nav-item>
		</b-nav>
	</div>
</template>

<script>
export default {
	name: 'TheNavbar',
	computed: {
		route () {
				return this.$route.name
		}
	}
}
</script>

<style>

</style>