import { Module, MutationTree, ActionTree, GetterTree } from 'vuex'
import { RootState, UserState, User } from '@/types/'
import { getNestedValue } from '@/util/helpers'

const mutations: MutationTree<UserState> = {
  setUser(state, payload: User) {
    state.user = payload
  },
}

const actions: ActionTree<UserState, RootState> = {
  async fetchUser({ commit, dispatch }, userUid: string) {
    // do some fetching
  },
}

const getters: GetterTree<UserState, RootState> = {
  userRole: (state): User['role'] | undefined => getNestedValue(state, ['user'], undefined),
}

const userModule: Module<UserState, RootState> = {
  namespaced: true,
  state: {
    user: undefined,
  },
  mutations,
  actions,
  getters,
}

export default userModule
