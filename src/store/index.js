import { createStore } from 'vuex'
import todos from './modules/todos'
import crud from './modules/crud'

const store=createStore({
    modules:{
        todos,
        crud
    }
});
 
export default store;