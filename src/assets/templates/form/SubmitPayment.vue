<template>
	<div class="payment__btn-wrap btn-wrap">
		<h4 class="btn-wrap__title">
			Отправить чек на Email
		</h4>
		<div class="btn-wrap__row">
			<input-custom
				:selector="'btn-wrap__mail'"
				:placeholder="'Email'"
				:name="'email'">
			</input-custom>
			<button class="btn-wrap__submit btn-submit">
				<span class="btn-submit__text">Оплатить</span>
				<svg v-svg symbol="loader" class="btn-submit__loader"></svg>
			</button>
		</div>
	</div>
</template>

<script>
	import InputCustom from '@/assets/templates/InputCustom';
	
	export default {
		name: "PaymentSubmit",
		components: {
			InputCustom,
		}
	}
</script>

<style scoped>

</style>