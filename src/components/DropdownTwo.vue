<template>
    <div>
        <p>this is dropdown two</p>
        <div id="v-model-select" class="demo">
            <select v-model="inputValue" @change="updateGetterSelectedValue">
                <option disabled value="">Please select one</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <span>Selected option is: {{ inputValue }}</span>
        </div>
        <div>
            <p>inputValue={{inputValue}} </p>
            <p>getterSelectedValue={{getterSelectedValue}} </p>
        </div>
    </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
    name:'DropdownTwo',
    components:{},
    computed:{
        ...mapGetters(['getterdataFromJson','getterSelectedValue']),

    },
    data(){
        return{
            inputValue: this.getterSelectedValue,
        }
    },
    methods:{
        ...mapActions(['actionFetchdata']),
        updateGetterSelectedValue(){
            this.getterSelectedValue= this.inputValue;
            console.log(this.inputValue);
        }

    },
    created(){
        return this.actionFetchdata();
    },
}
</script>

<style lang="scss" scoped>

</style>