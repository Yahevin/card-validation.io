<template>
    <main class="container">
        <img src="@/assets/img/main-banner.png" class="img img--contain" alt="main-banner">
        
        <div class="content">
            <article class="content__main">
                <banner-top></banner-top>
                
                <payment-form
                    v-show="formFilling"
                    @submit="formSubmited">
                </payment-form>
                
                <payment-success
                    v-if="!formFilling && sendSuccess"
                    :form="this.$refs.form">
                </payment-success>
                
                <payment-error
                    v-if="!formFilling && !sendSuccess"
                    :form="this.$refs.form">
                </payment-error>
            </article>
            <aside class="content__aside">
                <about-column></about-column>
            </aside>
        </div>
    </main>
</template>

<script>
    import {store} from '@/assets/js/store/index';
    import BannerTop from '@/assets/templates/BannerTop';
    import PaymentForm from '@/assets/templates/form/PaymentForm';
    import PaymentSuccess from '@/assets/templates/form-send/PaymentSuccess';
    import PaymentError from '@/assets/templates/form-send/PaymentError';
    import AboutColumn from '@/assets/templates/AboutColumn';

    export default {
        name: "Main",
        components: {
            BannerTop,
            PaymentForm,
            AboutColumn,
            PaymentSuccess,
            PaymentError,
        },
        store,
        data() {
            return {
                start: true,
                sendSuccess: false,
                currentYear: null,
                currentMonth: null,
            }
        },
        watch: {
        },
        computed: {
            saveCard() {
                return this.$store.getters.remember_card
            },
            formFilling() {
                return this.$store.getters.form_filling
            },
            cardNumber() {
                return this.$store.getters.card_number
            },
            cardYear() {
                return this.$store.getters.year
            },
            cardMonth() {
                return this.$store.getters.month
            },
            paySystem() {
                return this.$store.getters.pay_system
            },
            cardExpired() {
                return this.$store.getters.card_expired
            }
        },
        methods: {
            formSubmited() {
                if(this.cardExpired) {
                    return;
                }

                this.sendSuccess = Math.random() > 0.5;

                if(this.sendSuccess && this.saveCard) {
                    this.$store.dispatch('pushCard', {
                        number: this.cardNumber.split(' ').join(''),
                        system: this.paySystem,
                        year: this.cardYear,
                        month: this.cardMonth,
                    });
                }

                this.$store.dispatch('setAction', false);
            },
        },
    }
</script>
