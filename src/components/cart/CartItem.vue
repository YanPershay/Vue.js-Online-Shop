<template>
    <div class="v-cart-item">
        <img class="v-cart-item__image" :src=" require('../../assets/images/' + cartItemData.image)" alt=""/>
        <div class="v-cart-item__info">
            <p>{{cartItemData.name}}</p>
            <p>{{cartItemData.price | toFix}}</p>
            <p>{{cartItemData.article}}</p>
        </div>
        <div class="c-cart-item__qty">
            <p>Quantity:</p>
            <span>
                <span class="qty__btn" @click="decrementItem">-</span>
                    {{cartItemData.quantity}}
                <span class="qty__btn" @click="incrementItem">+</span>
            </span>
        </div>
        <button class="v-cart-item__btn" @click="deleteFromCart">Delete</button>  
    </div>
</template>

<script>
import toFix from '../../filters/toFix'

    export default {
        name: 'CartItem',
        components: {
        },
        props: {
            cartItemData: {
                type: Object,
                default() {
                    return {}
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
        computed: {},
        methods: {
            decrementItem() {
                this.$emit('decrement')
            },
            incrementItem() {
                this.$emit('increment')
            },
            deleteFromCart() {
                this.$emit('deleteFromCart')
            }
        },
        watch: {},
        mounted(){
            
        }
    }
</script>

<style lang="scss">
@import "@/assets/styles/styles.scss";

    .v-cart-item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: $padding*2;
    margin-bottom: $margin*2;
    &__image {
      max-width: 250px;
    }
    &__btn {
        background: red;
    }
    .qty__btn {
      display: inline-block;
      background: rgb(80, 247, 3);
      border: none;
      padding: 10px 20px;
      margin: 5px;
      border-radius: 5px;
      cursor: pointer;
      text-decoration: none;
      font-size: 15px;
      font-family: inherit;
      
      user-select: none;
    }
    .qty__tools {
      user-select: none;
    }
  }
</style>