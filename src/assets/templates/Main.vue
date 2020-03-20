<template>
    <main class="container">
        <img src="@/assets/img/main-banner.png" class="img img--contain" alt="main-banner">
        
        <div class="content">
            <article class="content__main">
                <banner-top></banner-top>
                <payment-form></payment-form>
                <payment-success></payment-success>
                <payment-error></payment-error>
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
            }
        },
        computed: {

        },
        methods: {
        },
    }
</script>
