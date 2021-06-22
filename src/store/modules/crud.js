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
    },
    deleteBook({commit},payload){
        console.log(payload);
        commit('setDeleteBook',payload);
    }
};
const mutations={
    setAddBook(state,payload){
        state.books.push(payload);
    },
    setDeleteBook(state,payload){
        console.log(state);
        console.log(payload);
        //let newArr = state.books.filter((boo)=>{ boo.id != payload});
        let x = state.books.filter((a)=>{
            if(a.id!=payload){
                return a
            }
        });
        console.log(x);
        state.books = x;
    }
};
 
export default{
    state,
    getters,
    actions,
    mutations
}
