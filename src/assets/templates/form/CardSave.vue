<template>
	<div class="payment__save card-save">
		<div class="card-save__wrap">
			<input class="card-save__input"
                   type="checkbox"
			       id="card-save"
                   v-model="cardSave">
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
    import {store} from '@/assets/js/store/index';

	export default {
		name: "CardSave",
        store,
        computed: {
            cardSave: {
                get() {
                    return this.$store.getters.remember_card;
                },
                set(val) {
                    this.$store.dispatch('rememberCard', val);
                }
            }
        }
	}
</script>

<style scoped>

</style>
