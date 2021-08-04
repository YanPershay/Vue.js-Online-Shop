<template>
    <div class="v-catalog-item">

        <PopUp 
            v-if="isInfoPopupVisible"
            rightBtnTitle="Add to cart"
            @closePopup="closePopup"
            :popupTitle="productData.name"
            @popupButtonAction="addToCart"
        >
            <img
            class="v-catalog-item__image" 
            v-bind:src=" require('../../assets/images/' + productData.image)" 
            alt="img">
            <div class="v-catalog-item__definition">
                <p class="v-catalog-item__name">{{productData.name}}</p>
                <p class="v-catalog-item__price">Price: ${{productData.price | toFix}}</p>
                <p class="v-catalog-item__price">{{productData.category}}</p>
            </div>
        </PopUp>
        <img
          class="v-catalog-item__image" 
          v-bind:src=" require('../../assets/images/' + productData.image)" 
          alt="img">
        <p class="v-catalog-item__name">{{productData.name}}</p>
        <p class="v-catalog-item__price">Price: ${{productData.price | toFix}}</p>
        <button 
            class="v-catalog-item__show-info"
            @click="showPopupInfo"
             >
            Show info
        </button>
        <button class="v-catalog-item__add_to_cart_btn btn" @click="addToCart">Add to cart</button>
    </div>
</template>

<script>
import PopUp from '../popup/PopUp.vue'
import toFix from '../../filters/toFix'

    export default {
        name: 'Catalog item',
        components: {
            PopUp
        },
        props: {
            productData: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {
                isInfoPopupVisible: false
            }
        },
        filters: {
            toFix
        },
        computed: {},
        methods: {
            closePopup() {
                this.isInfoPopupVisible = false;
            },
            showPopupInfo() {
                this.isInfoPopupVisible = true;
            },
            addToCart() {
                this.$emit('addToCart', this.productData)
            }
        },
        watch: {},
        mounted(){
            this.$set(this.productData, 'quantity', 1)
        }
    }
</script>

<style lang="scss">
@import "@/assets/styles/styles.scss";

  .v-catalog-item {
      background: white;
     flex-basis: 25%;
     box-shadow: 0 0 8px 4px #f5f1f1;
     padding: $padding*2;
     margin-bottom: $margin*2;
     &__image {
      width: 280px;
      height: 200px;
      border-radius: 10%;
    }
    &__show-info {
        background: rgb(245, 201, 5);
    }
    &__definition {
        margin: 50px;
    }
  }

  
</style>