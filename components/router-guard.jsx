import { useEffect } from 'react'
import { useRouter } from 'next/router'

function Redirect({ to }) {
  const router = useRouter()
  useEffect(() => {
    router.push(to)
  }, [router, to])

  return null
}

export default function RouterGuard({ children, currentUser }) {
  const router = useRouter()
  const protectedPages = ['/protected']
  const currentPage = router.pathname

  const isNotAllow = protectedPages.includes(currentPage) && !currentUser
  if (isNotAllow) {
    return <Redirect to="/login" />
  }

  return <>{children}</>
}
