import { useState, useEffect } from 'react'

function WizardPage() {
  useEffect(() => {
    console.log('Wizard 誕生')
    return () => {
      console.log('Wizard 消滅')
    }
  }, [])

  useEffect(() => {
    console.log('巫師更新，更新不代表消滅')
  })

  return <div>WizardPage</div>
}

function Layout({ children }) {
  return <div className="bg-danger h-20">{children}</div>
}

export default function Mount() {
  const withoutLayout = false
  let [num, setNum] = useState(0)

  const Wrapper = withoutLayout ? (
    <WizardPage />
  ) : (
    Layout({
      children: <WizardPage />
    })
  )

  console.log('Wrapper is a JSX，ex:  <div>QQ</div>', Wrapper)

  return (
    <>
      <div
        onClick={() => {
          setNum(num + 1)
        }}
      >
        num: {num}
      </div>

      <div>{Wrapper}</div>
    </>
  )
}
