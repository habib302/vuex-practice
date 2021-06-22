<template>
    <div>
        <h1>crud operation</h1>
        {{}}
        <input type="text" v-model="title1"/>
        <button @click="addBook1">Add Books</button>
        <div v-for="b in getterBooks" :key="b.id">
            {{}}  {{b.title}} 
            <button @click="deleteBook1(b.id)">Delete</button>
        </div>

    </div>
</template>

<script>
import {mapActions,mapGetters } from 'vuex'
import { v4 as uuidv4 } from 'uuid';
export default {
name:'CrudOperation',
computed:{
    ...mapGetters(['getterBooks']),
},
methods:{
     ...mapActions(['addBook','deleteBook']),
    addBook1(){
        this.$store.dispatch("addBook",{
            id:uuidv4(),
            title:this.title1
        })
        this.title1=""
    },
    deleteBook1(id1){
        console.log(id1);
        this.$store.dispatch('deleteBook',id1);
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