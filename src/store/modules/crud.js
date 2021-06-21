// import axios from 'axios'
 
const state={
    books:[
        {
            id:1,
            title:'this is book 1'
        }
    ]
};
const getters={
   getterBooks(state){
       return state.books;
   }
};
const actions={
    
};
const mutations={

};
 
export default{
    state,
    getters,
    actions,
    mutations
}
