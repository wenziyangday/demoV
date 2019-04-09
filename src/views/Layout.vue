<template>
	<div class="layout">
		<div class="left">
			left
		</div>

		<div class="right">
			<router-view name="main"/>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Layout"
	}
</script>

<style lang="stylus" scoped>
	.layout
		display flex
		.left
			flex 0 0 300px
			background #ff000f
		.right
			flex 1
</style>
