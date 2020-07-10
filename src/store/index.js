import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

class Task {
    priority = 0;
    priorityModifer = 0;
    objective = null
    taskDoer = null
}

export default new Vuex.Store({
    state: {
        powerPoints: 15,
        income: 323300,
        expenditure: 323300,
        round: 1,
        stats: null,
        policies: null,
    },
    mutations: {
        UPDATE_POWER_POINTS: (state, points) => state.powerPoints = points,
        UPDATE_INCOME: (state, cash) => state.income = cash,
        UPDATE_EXPENDITURE: (state, cash) => state.expenditure = cash,
        SET_STATS: (state, stats) => state.stats = stats,
        SET_POLICIES: (state, policies) => state.policies = policies
    },
    actions: {
        nextRound() {

        },
        start({commit}, country){
            commit('SET_STATS', country.stats)
            commit('SET_POLICIES', country.policies)
        },
        updatePolicy({commit, state}, {policy, newValue, oldValue}){
            let policies = {...state.policies};
            policies[policy] = newValue;
            commit('SET_POLICIES', policies);
        }
    },
    modules: {}
})
