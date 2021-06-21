<template>
    <div>
        <h1>crud operation</h1>
        {{getterBooks}}
        


    </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
// import { v4 as uuidv4 } from 'uuid';
export default {
name:'CrudOperation',
computed:{
    ...mapGetters(['getterBooks']),
},
methods:{
     ...mapActions(['']),

},
data(){
    return{
        obj:{
            id:'',
            title:''
        }
    }
}

}
</script>

<style lang="scss" scoped>

</style>