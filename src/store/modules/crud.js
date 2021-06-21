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
    addBook({commit},payload){
        console.log(payload);
        commit('setAddBook',payload);
    }
};
const mutations={
    setAddBook(state,payload){
        state.books.push(payload);
    }
};
 
export default{
    state,
    getters,
    actions,
    mutations
}
