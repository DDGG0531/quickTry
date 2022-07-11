import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'

function FullScreenLoader() {
  return <div className="h-screen w-screen bg-green opacity-10">~Loading</div>
}

function sleep(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve()
    }, time)
  })
}

export default function Initializer({ setInitialized, setCurrentUser }) {
  const block = useRef(false)

  const router = useRouter()

  useEffect(() => {
    // do something here
    if (block.current) return

    block.current = true
    doInitialize()
  }, [])

  async function doInitialize() {
    // case1: enter from "special" page
    // case2: enter from other page
    if (router.pathname === '/special') {
      await sleep(2000)
      alert('I am special')
      setInitialized(true)
      setCurrentUser()
    } else {
      await sleep(1000)
      setInitialized(true)
      // setCurrentUser()
    }
  }

  return <FullScreenLoader />
}
