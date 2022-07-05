import UserApi from '../../api/user'
import { setItem, getItem } from '../../utils/storage'
export default {
  namespaced: true,
  state: () => ({
    token: getItem('token') || '',
    authorization: getItem('authorization') || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem('token', token)
    },
    setAuthorization(state, authorization) {
      state.authorization = authorization
      setItem('authorization', authorization)
    }
  },
  actions: {
    async code({ commit }) {
      const response = await UserApi.codes()
      console.log('77777', response.data.data.token)
      commit('setToken', response.data.data.token)
      return response
    },
    async getLog({ commit }, data) {
      const response = await UserApi.login(data)
      console.log(response)
      return response
    }
  }
}
