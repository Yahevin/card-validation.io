<template>
	<div class="payment__card payment-card">
		<div class="payment-card__face front-side"
            :class="frontModificator">
            <div class="front-side__number card-number">
                <div class="card-number__input"
                    @click="showMySaved=true">
                    <input-custom
                        :placeholder="'Номер карты'"
                        :name="'card_number'">
                    </input-custom>
                </div>
                <div class="card-number__system card-number__system--current">
                    <icon :name="system"></icon>
                </div>
                <div class="card-number__box"
                     v-if="showMySaved && savedCards.length > 0 && cardNumber.length === 0">
                    <div v-for="(card, index) in savedCards"
                        class="card-number__saved"
                        @click="useSaved(card)">
                        <div class="card-number__digit">
                            {{ covered(card.number) }}
                        </div>
                        <div class="spacer"></div>
                        <div class="card-number__system">
                            <icon :name="card.system"></icon>
                        </div>
                        <div class="card-number__btn"
                            @click="deleteCard(index)">
                            <svg v-svg symbol="trash" class="svg"></svg>
                        </div>
                    </div>
                    <div class="card-number__bg"
                        @click="showMySaved=false">
                    </div>
                </div>
            </div>

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
                    <svg v-svg :symbol="bank" class="svg"></svg>
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
    import {store} from '@/assets/js/store/index';
    import Icon from '@/assets/templates/Icon';
	import InputCustom from '@/assets/templates/InputCustom';
	
	export default {
		name: "PaymentCard",
		components: {
			InputCustom,
            Icon,
		},
		data() {
			return {
			    bank: '',
                system: '',
                showMySaved: false,
			}
		},
        watch: {
            cardNumber: function () {
                if(this.cardNumber.length >= 4) {
                    if(this.bank === '') {
                        this.bank = this.getRandomBank();
                        this.system = this.getRandomSystem();

                        this.$store.dispatch('paySystem', this.system);
                    }
                } else {
                    this.bank = '';
                    this.system = '';
                }
            },
        },
        store,
		computed: {
            savedCards() {
                return this.$store.getters.saved_cards
            },
            cardNumber() {
                return this.$store.getters.card_number;
            },
            frontModificator() {
                return 'front-side--' + this.bank
            }
		},
        methods: {
            covered(val) {
                let value = val.toString();
                return value.slice(0,4) + ' ' + value.slice(4,6) + '** **** ' + value.slice(12,17);
            },
            useSaved(card) {
                this.showMySaved = false;
                this.$store.dispatch('paySystem', card.system);
                this.$store.dispatch('card_number', card.number);
            },
            deleteCard(index) {
                this.$store.dispatch('deleteCard', index);
            },
            getRandomBank() {
                let random = Math.round(Math.random() * 3);

                switch (random) {
                    case 0:
                        return 'sber';
                    case 1:
                        return 'tink';
                    case 2:
                        return 'alpha';
                    case 3:
                        return 'open';
                }
            },
            getRandomSystem() {
                let random = Math.round(Math.random() * 3);

                switch (random) {
                    case 0:
                        return 'visa';
                    case 1:
                        return 'maestro';
                    case 2:
                        return 'mir';
                    case 3:
                        return 'mc';
                }
            }
        }
	}
</script>
