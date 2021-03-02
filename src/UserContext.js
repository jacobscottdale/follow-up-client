import React from 'react'

export default React.createContext({
  user: {},
  userContacts: [],
  storeUserContacts: () => {},
  redirectToLogin: () => {},
  setUser: () => {},
})