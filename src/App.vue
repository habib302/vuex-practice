<template>
  <div class="container">
    <dropdown-one></dropdown-one>
    <dropdown-two></dropdown-two>
    <crud-operation></crud-operation>
  </div>
</template>

<script>
import CrudOperation from './components/CrudOperation.vue'
import DropdownOne from './components/DropdownOne.vue'
import DropdownTwo from './components/DropdownTwo.vue'


export default {
  name: 'App',
  components: {
    DropdownOne,
    DropdownTwo,
    CrudOperation
    
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
  margin-top: 60px;
}
</style>
