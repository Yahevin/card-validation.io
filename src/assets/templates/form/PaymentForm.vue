<template>
    <ValidationObserver v-slot="{ handleSubmit, reset }">
        <form class="payment" ref="form"
              @reset.prevent="reset"
              @submit.prevent="handleSubmit(formSubmit)">
            <order-info></order-info>

            <payment-card></payment-card>

            <card-save></card-save>

            <submit-payment></submit-payment>

            <other-payment></other-payment>

            <button ref="reset"
                class="hidden"
                type="reset">
            </button>
        </form>
    </ValidationObserver>
</template>

<script>
    import {store} from '@/assets/js/store/index';
	import CardSave from '@/assets/templates/form/CardSave';
	import OrderInfo from '@/assets/templates/form/OrderInfo';
	import PaymentCard from '@/assets/templates/form/PaymentCard';
	import OtherPayment from '@/assets/templates/form/OtherPayment';
	import SubmitPayment from '@/assets/templates/form/SubmitPayment';

	export default {
		name: "PaymentForm",
		props: ['form'],
		components: {
			OrderInfo,
			CardSave,
			SubmitPayment,
			OtherPayment,
			PaymentCard,
		},
        store,
        mounted() {
            this.$bus.on('resetForm', this.bus);
        },
		methods: {
		    bus() {
                this.$refs.reset.click();
            },
			formSubmit(){
                this.$store.dispatch('processed', true);

                setTimeout(()=>{
                    this.$store.dispatch('processed', false);
                    this.$emit('submit');
                },1000);
			}
		}
	}
</script>

<style scoped>

</style>
