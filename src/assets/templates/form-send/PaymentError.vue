<template>
	<section class="payment payment-send">
		<div class="payment-send__status">
			<svg v-svg symbol="error" class="svg"></svg>
		</div>
		
		<h1 class="payment-send__title">
			Ошибка
		</h1>
		
		<div class="payment-send__text">
			<p>
				Пожалуйста, проверьте правильность введенной информации по Вашей банковской карте и попробуйте еще раз.
			</p>
			<br/>
			<p>
				Просим Вас повторно ввести поля: Номер карты, Срок действия, Код CVC2 или CVV2, Имя держателя карты.
				Мы не сохраняем их в целях Вашей безопасности.
			</p>
		</div>
		
		<div class="payment-send__btn btn-submit"
             @click="retrySend">
			<span class="btn-submit__text">Повторить</span>
		</div>
	</section>
</template>

<script>
    import {store} from '@/assets/js/store/index';

	export default {
		name: "PaymentError",
		props: ['form'],
        store,
        computed: {
        },
		methods: {
			retrySend() {
                this.$store.dispatch('setAction', true);
			},
		}
	}
</script>
