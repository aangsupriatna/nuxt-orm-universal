import Project from '@/orm/models/Project'
import projects from '../json/projects.json'

const state = {
    fetched: false
}

const mutations = {
    SET_FETCHED(state, fetched) {
        state.fetched = fetched
    }
}

const actions = {
    loadProjects({ dispatch, commit }) {
        if (!state.fetched) {
            return Project.insert({ data: projects }).then((res) => {
              console.log(res)
              commit('SET_FETCHED', true)
            })
        }
    }
}

export default {
    state,
    mutations,
    actions
}
