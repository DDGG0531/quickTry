import Link from 'next/link'
import { useInitStore } from '../store/init'
import { shallow } from 'zustand'

export default function Layout({ children }) {
  const { currentUser, removeCurrentUser } = useInitStore(
    state => ({
      currentUser: state.currentUser,
      removeCurrentUser: state.removeCurrentUser
    }),
    shallow
  )
  return (
    <div className="p-10 bg-blue">
      <header className="flex">
        <div className="flex gap-1">
          <Link href={`/protected`}>Protected</Link>
          <Link href={`/unprotected`}>UnProtected</Link>
        </div>

        <div className="ml-auto">
          <div>
            {currentUser && <div>I'am {currentUser?.name || '未登入'}</div>}
          </div>
          <div onClick={removeCurrentUser}>Logout</div>
        </div>
      </header>
      <div className="bg-gray h-[500px]">{children}</div>
    </div>
  )
}
