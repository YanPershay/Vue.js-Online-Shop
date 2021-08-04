<template>
    <div class="v-cart">
        <router-link :to="{name: 'Catalog'}">
            <div class="v-catalog__link_to_cart">
                Back to catalog
            </div>
        </router-link>
        <h1>Cart</h1>
        <p v-if="!cartData.length">There are no products in cart...</p>
        <CartItem 
            v-for="(item, index) in cartData"
            :key="item.article"
            :cartItemData="item"
            @deleteFromCart="deleteFromCart(index)"
            @increment="increment(index)"
            @decrement="decrement(index)"
            />
            <div class="v-cart__total">
                <p class="total__name">Total: </p>
                <p>${{cartTotalCost | toFix}}</p>
            </div>
    </div>
</template>

<script>
import CartItem from "./CartItem"
import {mapActions} from 'vuex'
import toFix from '../../filters/toFix'

    export default {
        name: 'Cart',
        components: {
            CartItem
        },
        props: {
            cartData: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                
            }
        },
        filters: {
            toFix
        },
        computed: {
            cartTotalCost() {
                let result = []

                if (this.cartData.length) {
                    for (let item of this.cartData) {
                        result.push(item.price * item.quantity) 
                    }

                    result = result.reduce(function (sum, el) {
                    return sum + el;
                })

                    return result;
                } else {
                    return 0;
                }
                
            }
        },
        methods: {
            ...mapActions([
                'DELETE_FROM_CART',
                'INCREMENT_CART_ITEM',
                'DECREMENT_CART_ITEM'
            ]),
            deleteFromCart(index) {
                this.DELETE_FROM_CART(index)
            },
            increment(index) {
                this.INCREMENT_CART_ITEM(index)
            },
            decrement(index) {
                this.DECREMENT_CART_ITEM(index)
            }
        },
        watch: {},
        mounted(){
            console.log('Loaded')
        }
    }
</script>

<style lang="scss">
@import "@/assets/styles/styles.scss";
    .v-cart {
        margin-bottom: 100px;
        &__total {
            position: fixed;
            bottom: 0;
            right: 0;
            left: 0;
            padding: $padding*2 $padding;
            display: flex;
            justify-content: center;
            background: rgb(8, 190, 114);
            color: #ffffff;
            font-size: 20px;;
        }

        .total__name {
            margin-right: $margin*2;
        }
    }
</style>