<template>
    <main class="container">
        <img src="@/assets/img/main-banner.png" class="img img--contain" alt="main-banner">
        
        <div class="content">
            <article class="content__main">
                <banner-top></banner-top>
                
                <form class="payment">
                    <order-info></order-info>
                    
                    <payment-card></payment-card>
                    
                    <card-save></card-save>
                    
                    <submit-payment></submit-payment>
                    
                    <other-payment></other-payment>
                </form>
            </article>
            <aside class="content__aside">
                <about-column></about-column>
            </aside>
        </div>
    </main>
</template>

<script>
    import {store} from '@/assets/js/store/index';
    import InputCustom from '@/assets/templates/InputCustom';

    import PaymentCard from '@/assets/templates/PaymentCard';
    import OtherPayment from '@/assets/templates/OtherPayment';
    import BannerTop from '@/assets/templates/BannerTop';
    import OrderInfo from '@/assets/templates/OrderInfo';
    import CardSave from '@/assets/templates/CardSave';
    import SubmitPayment from '@/assets/templates/SubmitPayment';
    import AboutColumn from '@/assets/templates/AboutColumn';


    export default {
        name: "Main",
        components: {
            PaymentCard,
            InputCustom,
            OtherPayment,
            BannerTop,
            OrderInfo,
            CardSave,
            AboutColumn,
            SubmitPayment,
        },
        store,
        data() {
            return {
                start: true,
            }
        },
        computed: {

        },
        methods: {
        },
    }
</script>
