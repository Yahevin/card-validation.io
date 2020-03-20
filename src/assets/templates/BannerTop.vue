<template>
	<div class="banner-top">
		<div class="banner-top__left">
			<img src="@/assets/img/uniteller.png" class="img img--contain" alt="uniteller">
		</div>
		
		<div class="spacer">
		</div>
		
		<div class="banner-top__right">
			<icon :name="'mir'"></icon>
		</div>
		<div class="banner-top__right">
			<icon :name="'visa'"></icon>
		</div>
		<div class="banner-top__right">
			<svg v-svg symbol="maestro" class="svg"></svg>
		</div>
		<div class="banner-top__right">
			<svg v-svg symbol="mastercard" class="svg"></svg>
		</div>
	</div>
</template>

<script>
	import Icon from '@/assets/templates/Icon';
	
	
	export default {
		name: "BannerTop",
		components: {
			Icon,
		}
	}
</script>

<style scoped>

</style>