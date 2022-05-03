import { createStore } from '@stencil/store'

const { state, onChange } = createStore({
    users: [],
    searchTerm: '',
})

onChange('users', value => {
    state.users = value
})

onChange('searchTerm', value => {
    state.searchTerm = value
})

export default state;