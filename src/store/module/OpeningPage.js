const store = {
    state: {
        userDetails: {
            email: '', 
            password: '',
        }
    },

    mutations: {
        SET_EMAIL_AND_PASSWORD: (state, payload) => { state.userDetails = payload },
        
    },

    getters: {
        getUserDetails: (state) => {return state.userDetails},
    
    },

    actions: {
        setUserDetails ({ commit }, val) {
            console.log('val', val)
            commit('SET_EMAIL_AND_PASSWORD', val)
        }
    
    }
}

export default store
