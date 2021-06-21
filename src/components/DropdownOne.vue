<template>
    <div>
        <p>dropdown one</p>
        <div id="v-model-select" class="demo">
            <select v-model="selected" @change="fetchFromJsonPlaceHolder">
                <option disabled value="">Please select one</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <span>Selected option is: {{ selected }}</span>
        </div>
        <div>
            <p>{{newData.id}} </p>
            <p>{{newData.title}} </p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'DropdownOne',
    components:{
        
    },
    data(){
        return{
            selected:'',
            newData:{}
        }
    },
    methods:{
        fetchFromJsonPlaceHolder(){
            axios.get(`https://jsonplaceholder.typicode.com/posts/${this.selected}`)
            .then(res=>{
                this.newData="";
                console.log(res.data);
                this.newData={...res.data};
            })
            .catch(err=>{
                console.log(err);
            })
        }
    },
    created(){
        // return this.fetchFromJsonPlaceHolder();
    },
    computed:{

    }

}
</script>

<style scoped>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}
</style>