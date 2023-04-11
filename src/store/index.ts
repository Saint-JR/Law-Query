import { createStore } from 'vuex'

export default createStore({
    state: {
        statusBarHeight:0
    },
    mutations: {
        setStatusBarHeight(state,num){
            state.statusBarHeight=num;
        }
    },
    actions: {
    },
    modules: {
    }
})