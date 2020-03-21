<template>
	<div class="btn-wrap payment__btn-wrap">
		<h4 class="btn-wrap__title">
			Другие способы оплаты
		</h4>
		<div class="btn-wrap__row">
			<div class="btn-link btn-link--google">
				<a href="" class="btn-link__item"></a>
				<svg v-svg symbol="GPay"
				     class="btn-link__icon"></svg>
			</div>
			<div class="btn-link btn-link--apple">
				<a href="" class="btn-link__item"></a>
				<svg v-svg symbol="APay"
				     class="btn-link__icon"></svg>
			</div>
			<div class="btn-link btn-link--samsung">
				<a href="" class="btn-link__item"></a>
				<svg v-svg symbol="SPay"
				     class="btn-link__icon"></svg>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "OtherPayment"
	}
</script>

<style scoped>

</style>