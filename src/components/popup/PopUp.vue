<template>
<div class="popup_wrapper" ref="popup_wrapper">
    <div class="v-popup">
        <div class="v-popup__header">
            <span>{{popupTitle}}</span>
            <span>
                <i 
                  @click="closePopup"
                  class="cls material-icons">close</i>
            </span>
        </div>
        <div class="v-popup__content">
            <slot></slot>
        </div>
        <div class="v-popup__footer">
            <!-- <button class="close_modal">Close</button> -->
            <button
             class="submit_btn"
             @click="popupButtonAction"
             >
                {{rightBtnTitle}}
             </button>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: "PopUp",
        methods: {
            closePopup() {
                this.$emit('closePopup')
            },
            popupButtonAction() {
                this.$emit('popupButtonAction')
            }
        },
        props: {
            rightBtnTitle: {
                type: String,
                default: 'Ok'
            },
            popupTitle: {
                type: String,
                default: 'Popup name'
            }
        },
        mounted() {
            let vm = this;
            document.addEventListener('click', function (item) {
                if (item.target === vm.$refs['popup_wrapper']) {
                    vm.closePopup()
                }
            })
        }
    }
</script>

<style lang="scss">
    .popup_wrapper {
    background: rgba(64,64,64, .4);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    height: 100%;
    left: 0;
    top: 0;
    bottom: 0;
  }
    .v-popup {
        z-index: 10;
        padding: 16px;
        position: fixed;
        top: 50px;
        width: 500px;
        background: #ffffff;
        box-shadow: 0 0 17px 0 #e7e7e7;
        &__header,
        &__footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__content {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .submit_btn {
            padding: 8px;
            color: #ffffff;
            background: rgb(7, 243, 105);
        }
        .close_modal {
            cursor: pointer;
            background: red;
            padding: 8px;
            color: #ffffff;
        }
        .cls {
            cursor: pointer;
        }
    }
</style>