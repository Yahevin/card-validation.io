<template>
	<div class="payment__card payment-card">
		<div class="payment-card__face front-side">
			<input-custom
				:selector="'front-side__number'"
				:placeholder="'Номер карты'"
				:name="'card_number'">
			</input-custom>
			
			<div class="front-side__bottom">
				<input-custom
					:selector="'front-side__date'"
					:placeholder="'Месяц'"
					:name="'month'">
				</input-custom>
				
				<div class="front-side__divider">
					&sol;
				</div>
				
				<input-custom
					:selector="'front-side__date'"
					:placeholder="'Год'"
					:name="'year'">
				</input-custom>
				
				<div class="front-side__bank">
					<img :src="bankLogo" class="img img--contain" :alt="bank">
				</div>
			</div>
			
		</div>
		<div class="payment-card__back back-side">
			<input-custom
				:selector="'back-side__input'"
				:placeholder="'CVC'"
				:name="'cvc'"
				:type="'password'">
			</input-custom>
			
			<div class="back-side__help">
				<span>
					Что это?
				</span>
				<div class="back-side__popup">
					Три или четыре последние цифры на обратной стороне карты.
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import InputCustom from '@/assets/templates/InputCustom';
	
	export default {
		name: "PaymentCard",
		components: {
			InputCustom,
		},
		data() {
			return {
				bank: '',
			}
		},
		computed: {
			bankLogo() {
				return '@/assets/img/' + this.bank + '.png';
			}
		}
	}
</script>