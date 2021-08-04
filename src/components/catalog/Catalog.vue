<template>
    <div class="v-catalog">
        <router-link :to="{name: 'Cart', params: {cartData: CART}}">
            <div class="v-catalog__link_to_cart">
            Cart: {{CART.length}}
        </div>
        </router-link>
        
        <h1>Million Dollars Collection</h1>
        <div class="filters">
            <Select 
                :selected="selected"
                :options="categories"
                @select="sortByCategories"
                :isExpanded="IS_MOBILE"
            />
            <div class="range-slider">
                <input
                 type="range"
                 min="0"
                 max="9000" 
                 step="500"
                 v-model.number="minPrice"
                 @change="setRangeSlider"
                 />
                <input 
                  type="range" 
                  min="0" 
                  max="9000" 
                  step="500"
                  v-model.number="maxPrice"
                  @change="setRangeSlider"
                  />
            </div>
            <div class="range-values">
                <p>Min: {{minPrice}}</p>
                <p>Max: {{maxPrice}}</p>
            </div>
        </div>
        <div class="v-catalog__list">
            <CatalogItem
                v-for="product in filteredProducts" 
                :key="product.article"
                v-bind:productData="product"
                @addToCart="addToCart"
             />
        </div>    
    </div>
</template>

<script>
import CatalogItem from "./CatalogItem"
import {mapActions, mapGetters} from 'vuex'
import Select from '../Select.vue'

    export default {
        name: 'Catalog',
        components: {
            CatalogItem,
            Select
        },
        props: {

        },
        data() {
            return {
                categories: [
                    {name: "All", value: "All"},
                    {name: "Male", value: "M"},
                    {name: "Female", value: "F"}
                ],
                selected: "All",
                sortedProducts: [],
                minPrice: 0,
                maxPrice: 9000
            }
        },
        computed: {
            ...mapGetters([
                'PRODUCTS',
                'CART',
                'IS_MOBILE',
                'IS_DESKTOP',
                'SEARCH_VALUE'
            ]),
            filteredProducts() {
                if (this.sortedProducts.length) {
                    return this.sortedProducts
                } else {
                    return this.PRODUCTS
                }
            }
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_API',
                'ADD_TO_CART'
            ]),
            setRangeSlider() {
                if (this.minPrice > this.maxPrice) {
                    let tmp = this.maxPrice;
                    this.maxPrice = this.minPrice;
                    this.minPrice = tmp;
                }
                this.sortByCategories()
            },
            sortByCategories(category) {
                let vm = this;
                this.sortedProducts = [...this.PRODUCTS]
                this.sortedProducts = this.sortedProducts.filter(function (item) {
                    return item.price >= vm.minPrice && item.price <= vm.maxPrice
                })

                if (category) {
                    this.sortedProducts = this.sortedProducts.filter(function (e) {
                        vm.selected === category.name;
                        return e.category === category.name
                })

                this.selected = category.name;
                }
            },
            addToCart(data) {
                this.ADD_TO_CART(data)
            },
            sortProductsBySearchValue(value) {
                this.sortedProducts = [...this.PRODUCTS]
                if (value) {
                this.sortedProducts = this.sortedProducts.filter(function (item) {
                    return item.name.toLowerCase().includes(value.toLowerCase());
                })
                } else {
                    this.sortedProducts = this.PRODUCTS
                }
            }
        },
        watch: {
            SEARCH_VALUE() {
                this.sortProductsBySearchValue(this.SEARCH_VALUE)
            }
        },
        mounted() {
            this.GET_PRODUCTS_FROM_API()
            .then((response) => {
                if (response.data) {
                    this.sortByCategories()
                    this.sortProductsBySearchValue(this.SEARCH_VALUE)
                }
            })
        }
    }
</script>

<style lang="scss">
@import "@/assets/styles/styles.scss";

  h1 {
      font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      font-weight: bold;
    }

 .v-catalog {
     &__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
     }
     &__link_to_cart {
         position: absolute;
         top: 160px;
         background: rgb(5, 238, 122);
         right: 10px;
         padding: $padding*2;
         border: solid 1px #aeaeae;
         border-radius: 10%;
     }
 }

 .filters {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .range-slider {
    width: 200px;
    margin: auto 16px;
    text-align: center;
    position: relative;
  }
  .range-slider svg, .range-slider input[type=range] {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  input[type=range]::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
    top: 2px;
    margin-top: -7px;
  }
</style>