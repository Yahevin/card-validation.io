<template>
	<form class="payment" ref="form" @submit="formSubmit">
		<order-info></order-info>
		
		<payment-card></payment-card>
		
		<card-save></card-save>
		
		<submit-payment></submit-payment>
		
		<other-payment></other-payment>
	</form>
</template>

<script>
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
		methods: {
			formSubmit(e){
				e.preventDefault();
				this.$emit('submit');
			}
		}
	}
</script>

<style scoped>

</style>