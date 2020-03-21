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
            <icon :name="'maestro'"></icon>
		</div>
		<div class="banner-top__right">
            <icon :name="'mc'"></icon>
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
