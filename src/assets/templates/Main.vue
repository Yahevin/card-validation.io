<template>
    <main class="container">
        <img src="@/assets/img/main-banner.png" class="img img--contain" alt="main-banner">
        
        <div class="content">
            <article class="content__main">
                <div class="banner-top">
                    <div class="banner-top__left">
                        <img src="@/assets/img/uniteller.png" class="img img--contain" alt="uniteller">
                    </div>
            
                    <div class="spacer">
                    </div>
            
                    <div class="banner-top__right">
                        <icon :name="'mir'"></icon>
                    </div>
                    <div class="banner-top__right">
                        <icon :name="'visa'"></icon>
                    </div>
                    <div class="banner-top__right">
                        <svg v-svg symbol="maestro" class="svg"></svg>
                    </div>
                    <div class="banner-top__right">
                        <svg v-svg symbol="mastercard" class="svg"></svg>
                    </div>
                </div>
                <form class="payment">
                    <h1 class="payment__title">
                        Оплата: 404,00 ₽
                    </h1>
                    <div class="payment__info order-info">
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
                    
                    <payment-card></payment-card>
                    
                    <div class="payment__save card-save">
                        <div class="card-save__wrap">
                            <input type="checkbox"
                                   id="card-save"
                                   class="card-save__input">
                            <label class="card-save__label" for="card-save">
                                <svg v-svg symbol="checked" class="svg card-save__arrow"></svg>
                            </label>
                        </div>
                        <label class="card-save__text" for="card-save">
                            Запомнить карту
                        </label>
                    </div>
                    
                    <div class="payment__btn-wrap btn-wrap">
                        <h4 class="btn-wrap__title">
                            Отправить чек на Email
                        </h4>
                        <div class="btn-wrap__row">
                            <input-custom
                                :selector="'btn-wrap__mail'"
                                :placeholder="'Email'"
                                :name="'email'">
                            </input-custom>
                            <button class="btn-wrap__submit btn-submit">
                                <span class="btn-submit__text">Оплатить</span>
                                <svg v-svg symbol="loader" class="btn-submit__loader"></svg>
                            </button>
                        </div>
                    </div>
    
                    <div class="payment__btn-wrap btn-wrap">
                        <h4 class="btn-wrap__title">
                            ОДругие способы оплаты
                        </h4>
                        <div class="btn-wrap__row">
                            <div class="btn-link btn-link--google">
                                <a href="" class="btn-link__item"></a>
                                <svg v-svg symbol="GPay"
                                     class="btn-link__icon"></svg>
                            </div>
                            <div class="btn-link btn-link--apple">
                                <a href="" class="btn-link__item"></a>
                                <svg v-svg symbol="APay"
                                     class="btn-link__icon"></svg>
                            </div>
                            <div class="btn-link btn-link--samsung">
                                <a href="" class="btn-link__item"></a>
                                <svg v-svg symbol="SPay"
                                     class="btn-link__icon"></svg>
                            </div>
                        </div>
                    </div>
                </form>
            </article>
            <aside class="content__aside about-column">
                <div class="about-column__accept">
                    <img src="@/assets/img/verified/visa.png" class="img img--contain" alt="main-banner">
                    <img src="@/assets/img/verified/mc.png" class="img img--contain" alt="main-banner">
                    <img src="@/assets/img/verified/pci.png" class="img img--contain" alt="main-banner">
                    <img src="@/assets/img/verified/mir.png" class="img img--contain" alt="main-banner">
                </div>
                <div class="about-column__text">
                    <p>
                        В системе Uniteller безопасность платежей и конфиденциальность введенной Вами информации
                        обеспечивается использованием протокола TLS и другими специальными средствами.
                        Ваша конфиденциальная информация хранится исключительно нами и ни при каких обстоятельствах не будет предоставлена
                        третьим лицам за исключением случаев, предусмотренных законодательством.
                    </p>
                    <br/>
                    <p>
                        В случае возникновения вопросов Вы можете обратиться в Службу поддержки компании
                        Uniteller по телефону 8 800 707-67-19 или электронной почте&nbsp;
                        <a href="mailto:support@uniteller.ru" class="about-column__link">
                            support@uniteller.ru
                        </a>
                    </p>
                </div>
            </aside>
        </div>
    </main>
</template>

<script>
    import {store} from '@/assets/js/store/index';
    import Icon from '@/assets/templates/Icon';
    import PaymentCard from '@/assets/templates/PaymentCard';
    import InputCustom from '@/assets/templates/InputCustom';

    export default {
        name: "Main",
        components: {
            Icon,
            PaymentCard,
            InputCustom,
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
