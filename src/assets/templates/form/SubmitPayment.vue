<template>
	<div class="payment__btn-wrap btn-wrap">
		<h4 class="btn-wrap__title">
			Отправить чек на Email
		</h4>
		<div class="btn-wrap__row">
			<input-custom
				:selector="'btn-wrap__mail'"
				:placeholder="'Email'"
				:mask="'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX'"
				:name="'email'">
			</input-custom>
			<button class="btn-wrap__submit btn-submit"
                    :class="loading"
                    ref="submitBtn">
				<span class="btn-submit__text">Оплатить</span>
				<svg v-svg symbol="loader" class="btn-submit__loader"></svg>
			</button>
        </div>
	</div>
</template>

<script>
    import {store} from '@/assets/js/store/index';
	import InputCustom from '@/assets/templates/InputCustom';
	
	export default {
		name: "PaymentSubmit",
		components: {
			InputCustom,
		},
        store,
		mounted() {
            this.$bus.on('submit-payment', this.submitPayment);
        },
        computed: {
            processed() {
		        return this.$store.getters.processed;
            },
            loading() {
                return this.processed ? 'btn-submit--load' : ''
            },
        },
        methods: {
            submitPayment() {
                this.$refs.submitBtn.click();
            },
        },
	}
</script>

<style scoped>

</style>
