import React, { ReactNode } from 'react'

const windowContext = React.createContext({})
const {Provider} = windowContext

type propT = {
  children : ReactNode
}

export default function Context({children} : propT) {

  const [] = React.useReducer()


  return (
    <Provider value={{}}>
      {children}
    </Provider>
  )
}

 export {windowContext}
