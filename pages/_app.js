import '../styles/globals.css'
import { useInitStore } from '../store/init'
import Initializer from '../components/initializer'
import RouterGuard from '../components/router-guard'
import Layout from '../components/layout'
import { shallow } from 'zustand'

function MyApp({ Component, pageProps }) {
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
    </>
  )
}

export default MyApp
