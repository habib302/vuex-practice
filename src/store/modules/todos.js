import axios from 'axios'
 
const state={
    dataFromJson:{},
    selectedValue:'ccc'
};
const getters={
    getterdataFromJson(state){
        return state.dataFromJson;
    },
    getterSelectedValue(state){
        return state.selectedValue;
    }
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
    }
};
const mutations={
    setActionFetchdata: (state,d) => state.dataFromJson=d,
};
 
export default{
    state,
    getters,
    actions,
    mutations
}
