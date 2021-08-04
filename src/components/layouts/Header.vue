<template>
    <div class="v-header">
        <router-link :to="{name: 'Main'}">
            <img src="../../assets/logo.png" alt="img">
        </router-link>
        <div class="search-field">
            <input
                type="text"
                v-model="searchValue"
            />
            <button class="search-btn" >
                <i class="material-icons" @click="search(searchValue)">search</i>
            </button>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "Header",
        props: {},
        data() {
            return {
                searchValue: ''
            }
        },
        computed: {
            ...mapGetters([
                'SEARCH_VALUE'
            ])
        },
        methods: {
            ...mapActions([
                'GET_SEARCH_VALUE_TO_VUEX'
            ]),
            search(value) {
                this.GET_SEARCH_VALUE_TO_VUEX(value);
                this.$router.push('/catalog')
            }
        }
    }
</script>

<style lang="scss">
    .v-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: rgba(3, 250, 77, 0.801);
        padding: 16px;
        position: fixed;
        width: 100%;
        top: 0;
        left:0;
        img {
            width: 50px
        }
        .search-field {
            padding: 16px;
            position: relative;
            right: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .search-btn {
            margin-left: 16px;
        }
    }
</style>