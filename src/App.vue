<template>
  <div id="app">
    <MainWrapper />
  </div>
</template>

<script>
import MainWrapper from "./components/MainWrapper";
import {mapActions, mapGetters} from 'vuex'

export default {

  name: 'App',
  components: {
    MainWrapper
  },
  mounted() {
   let vm = this;
    window.addEventListener('resize', function() {
      if (window.innerWidth > 767) {
        vm.SET_DESKTOP()
      }
      else {
        vm.SET_MOBILE()
      }
    })
  },
  methods: {
 ...mapActions([
      'SET_MOBILE',
      'SET_DESKTOP'
    ]),
  },
  computed: {
    ...mapGetters([
      'IS_MOBILE',
      'IS_DESKTOP'
    ])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 160px;
}

button {
  display: inline-block;
  background: rgb(3, 180, 62);
  color: rgb(253, 253, 253);
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
</style>
