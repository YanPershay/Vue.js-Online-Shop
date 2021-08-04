<template>
    <div class="v-main-wrapper">
        <Header />
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Header from './layouts/Header.vue'

    export default {
        name: 'Main wrapper',
        components: {
            Header
        },
        props: {

        },
        data() {
            return {
                title: 'Main wrapper'
            }
        },
        computed: {
            ...mapGetters([
                'CART'
            ])
        },
        methods: {},
        watch: {},
        mounted(){}
    }
</script>

<style>
 .v-main-wrapper {
     margin: 0 auto;
 }
</style>