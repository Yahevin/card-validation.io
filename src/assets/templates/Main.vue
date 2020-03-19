<template>
    <main class="container">
        <img src="@/assets/img/main-banner.png" class="img-contain img-contain--width" alt="main-banner">
        
        <div class="content">
            <article class="content__main">
                <div class="banner-top">
                    <div class="banner-top__left">
                        <img src="@/assets/img/uniteller.png" class="img-contain img-contain--width" alt="uniteller">
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
            </article>
            <aside class="content__aside"></aside>
        </div>
    </main>
</template>

<script>
    import {store} from '@/assets/js/store/index';
    import Icon from '@/assets/templates/Icon';
    
    export default {
        name: "Main",
        components: {
            Icon
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
