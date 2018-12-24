// 组装模块并导出 store 的文件
import Vuex from 'vuex'
import Vue from 'vue'
// vuex的各个模块
import index from './modules/index'
import search from './modules/search';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        index,
        search
    }
})