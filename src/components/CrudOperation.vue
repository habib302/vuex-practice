<template>
    <div>
        <h1>crud operation</h1>
        {{getterBooks}}
        <input type="text" v-model="title1"/>
        <button @click="addBook">Add Books</button>

    </div>
</template>

<script>
import {mapActions,mapGetters } from 'vuex'
// import { v4 as uuidv4 } from 'uuid';
export default {
name:'CrudOperation',
computed:{
    ...mapGetters(['getterBooks']),
},
methods:{
     ...mapActions(['addBook']),
    addBook(){
        this.$store.dispatch("addBook",{
            id:11,
            title:this.title1
        })
    }
},
data(){
    return{
        obj:{
            id:'',
            title:''
        },
        title1:''
    }
}

}
</script>

<style lang="scss" scoped>

</style>