export const state = () => ({
  WalletEnabled: false,
  UserConnected: false,
  SelectedAddress: "",
  ChainId: "",
  ChainName: ""
})

export const mutations = {
  set_walletenabled(state, wallet_enabled) {
    state.WalletEnabled = wallet_enabled
  },
  set_userconnected(state, user_connected) {
    state.UserConnected = user_connected
  },
  set_address(state, selected_address) {
    state.SelectedAddress = selected_address
  },
  set_chain(state, chain_id) {
    state.ChainId = chain_id
  }
}