<template>
	<form class="payment">
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
		components: {
			OrderInfo,
			CardSave,
			SubmitPayment,
			OtherPayment,
			PaymentCard,
		}
	}
</script>

<style scoped>

</style>