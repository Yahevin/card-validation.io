<template>
	<div class="payment__save card-save">
		<div class="card-save__wrap">
			<input type="checkbox"
			       id="card-save"
			       class="card-save__input">
			<label class="card-save__label" for="card-save">
				<svg v-svg symbol="checked" class="svg card-save__arrow"></svg>
			</label>
		</div>
		<label class="card-save__text" for="card-save">
			Запомнить карту
		</label>
	</div>
</template>

<script>
	export default {
		name: "CardSave"
	}
</script>

<style scoped>

</style>