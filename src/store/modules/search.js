import * as types from '@/store/types';

const state = {
    keyWords: '',
    topTen: [],
    detail: {}
}

const getters = {
    getKeyWords: state => state.keyWords,
    topTen: state => state.topTen,
    detail: state => state.detail
}

const actions = {
    TOP_TEN({commit}, res) {
        commit(types.TOP_TEN, res);
    },
    PRO_DETAIL({commit}, res) {
        commit(types.PRO_DETAIL, res);
    },
    KEY_WORDS({commit}, res) {
        commit(types.KEY_WORDS, res);
    }
}

const mutations = { 
    [types.TOP_TEN](state, res) {
        state.topTen = res;
        console.log(state.topTen,123)
    },
    [types.PRO_DETAIL](state, res) {
        state.detail = res;
    },
    [types.KEY_WORDS](state, res) {
        state.keyWords = res;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
