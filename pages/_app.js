import '../styles/globals.css'
import { useInitStore } from '../store/init'
import Initializer from '../components/initializer'
import RouterGuard from '../components/router-guard'
import Layout from '../components/layout'
import { shallow } from 'zustand'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 0
          }
        }
      })
  )
  const { initialized, setInitialized, currentUser, setCurrentUser } =
    useInitStore(
      state => ({
        initialized: state.initialized,
        setInitialized: state.setInitialized,
        currentUser: state.currentUser,
        setCurrentUser: state.setCurrentUser
      }),
      shallow
    )
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {initialized ? (
          <RouterGuard currentUser={currentUser}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </RouterGuard>
        ) : (
          <Initializer
            setInitialized={setInitialized}
            setCurrentUser={setCurrentUser}
          />
        )}
      </QueryClientProvider>
    </>
  )
}

export default MyApp
