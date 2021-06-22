import axios from 'axios'
 
const state={
    dataFromJson:{},
    selectedValue:'ccc'
};
const getters={
    getterdataFromJson(state){
        return state.dataFromJson;
    },
    
};
const actions={
    actionFetchdata({commit}){
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res=>{
            this.newData="";
            console.log(res.data);
            // this.newData={...res.data};
            commit('setActionFetchdata',res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    },
    actionFetchDataById({commit},id){
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            this.newData="";
            console.log(res.data);
            // this.newData={...res.data};
            commit('setActionFetchDataById',res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }
};
const mutations={
    // setActionFetchdata: (state,d) => sate,

    setActionFetchDataById(state,data){

        state.dataFromJson = data;
        console.log(data);

    }
};
 
export default{
    state,
    getters,
    actions,
    mutations
}
