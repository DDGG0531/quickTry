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
    <div className="p-10 bg-blue h-full">
      <header className="flex sticky top-0 bg-green">
        <div className="flex gap-1">
          <Link href={`/protected`}>Protected</Link>
          <Link href={`/unprotected`}>UnProtected</Link>
          <Link href={`/infinite-scroll`}>無限滾動</Link>
        </div>

        <div className="ml-auto">
          <div>
            {currentUser && <div>I'am {currentUser?.name || '未登入'}</div>}
          </div>
          <div onClick={removeCurrentUser}>Logout</div>
        </div>
      </header>
      <div className="bg-gray">{children}</div>
    </div>
  )
}
