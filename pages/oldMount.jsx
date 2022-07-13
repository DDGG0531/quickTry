import React, { useState, useEffect } from 'react'

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

/**
 * React diff演算法，JSX若使用<Component>，會先比較<Component>是不是同一個參考，if not即使內容一樣，也會開啟新的生命週期
 * 若是直接產生JSX再注入則會認定是同個參考
 */
export default function Mount() {
  const withoutLayout = true
  let [num, setNum] = useState(0)

  function Wrapper() {
    return withoutLayout ? (
      <WizardPage />
    ) : (
      <Layout>
        <WizardPage />
      </Layout>
    )
  }

  const Ins = Wrapper()

  return (
    <>
      <div
        onClick={() => {
          setNum(num + 1)
        }}
      >
        num: {num}
      </div>
      {/* 方法一 */}
      <Wrapper />
      {/* 方法二 */}
      <div>{Ins}</div>
    </>
  )
}
