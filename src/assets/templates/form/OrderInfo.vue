<template>
	
	<div class="payment__info">
		<h1 class="payment__title payment__title--big-margin">
			Оплата: 404,00 ₽
		</h1>
		
		<div class="order-info">
			<div class="order-info__column">
				<div class="order-info__row">
                                <span class="order-info__item">
                                    Магазин:&nbsp;
                                </span>
					<span class="order-info__item order-info__item--grey">
                                    Социальная карта
                                </span>
				</div>
				<div class="order-info__row">
                                <span class="order-info__item">
                                    Номер заказа:&nbsp;
                                </span>
					<span class="order-info__item order-info__item--grey">
                                    6378209463
                                </span>
				</div>
			</div>
			
			<div class="spacer"></div>
			
			<div class="order-info__column payment-safe">
				<div class="payment-safe__btn">
					<svg v-svg symbol="payment-safe" class="svg"></svg>
				</div>
				<div class="payment-safe__text">
					Безопасная форма оплаты
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "OrderInfo"
	}
</script>

<style scoped>

</style>