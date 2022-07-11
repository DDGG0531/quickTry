import { useInitStore } from '../store/init'
import { shallow } from 'zustand'

export default function Login() {
  const { currentUser, setCurrentUser } = useInitStore(
    state => ({
      currentUser: state.currentUser,
      setCurrentUser: state.setCurrentUser
    }),
    shallow
  )
  return (
    <>
      <div>I am {currentUser?.name || '未登入'}</div>
      <div
        onClick={() => {
          setCurrentUser()
        }}
      >
        Login
      </div>
    </>
  )
}
