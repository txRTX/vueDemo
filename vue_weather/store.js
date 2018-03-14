/**
 * Created by tx46744 on 2017/11/16.
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

//这里定义数据
let state = {
    count:10
};
const mutations = {
    add(state){
        state.count++
    },
    decrease(state){
        state.count--
    }
};
// 事件触发后的逻辑操作
// 参数为事件函数
const actions = {
    add(add){
        add.commit('add')
    },
    decrease(decrease){
        decrease.commit('decrease')
    },
    oddAdd({commit,state}){
        if (state.count % 2 === 0) {
            commit('add')
        }
    }
};

// 返回改变后的数值
const getters = {
    count(state){
        return state.count
    },
    getOdd(state) {
        return state.count % 2 === 0 ? '偶数' : '奇数'
    }
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
})