import create from 'zustand'

export const useInitStore = create(set => ({
  initialized: false,
  setInitialized: initialized => {
    set({ initialized: initialized })
  },
  currentUser: undefined,
  setCurrentUser: (currentUser = { name: 'jim' }) => {
    console.log('currentUser', currentUser)
    set({ currentUser: currentUser })
  },
  removeCurrentUser: () => {
    set({ currentUser: undefined })
  }
}))
