<template>
	<section class="payment payment-send">
		<div class="payment-send__status">
			<svg v-svg symbol="success" class="svg"></svg>
		</div>
		
		<h1 class="payment-send__title">
			Платёж <br/> успешно совершён
		</h1>
		
		<p class="payment-send__text">
			Подробная информация о Вашем платеже отправлена на электронный адрес, указанный во время платежа.
		</p>
		
		<div @click="returnToForm"
				class="payment-send__btn btn-submit">
			<span class="btn-submit__text">Вернуться в магазин</span>
		</div>
		
		<div class="payment-send__hr"></div>
		
		<div class="payment-send__info pay-cheque">
			<div class="pay-cheque__position">Дата и время платежа</div>
			<div class="pay-cheque__position">Получатель платежа</div>
			<div class="pay-cheque__position">Номер платежа</div>
			<div class="pay-cheque__position">Сумма</div>
			<div class="pay-cheque__position">Банковская карта</div>
			<div class="pay-cheque__position">Код авторизации</div>
			<div class="pay-cheque__data">01.12.2019 11:13:37</div>
			<div class="pay-cheque__data">МКУ «Организатор городского парковочного пространства» parkingkzn.ru</div>
			<div class="pay-cheque__data">474426</div>
			<div class="pay-cheque__data">404.00 RUB</div>
			<div class="pay-cheque__data">434412******1044</div>
			<div class="pay-cheque__data">200.00 RUB</div>
		</div>
		
		<div class="payment-send__print print-btn">
			<div class="print-btn__wrap">
				<div class="print-btn__icon">
					<svg v-svg symbol="printer" class="svg"></svg>
				</div>
				<span class="print-btn__text">
            Распечатать
        </span>
			</div>
		</div>
	
	</section>
</template>

<script>
	import {store} from '@/assets/js/store/index';
	
	export default {
		name: "PaymentSuccess",
		store,
		methods: {
			returnToForm() {
				this.$store.dispatch('setAction', true);
			},
		}
	}
</script>

<style scoped>

</style>