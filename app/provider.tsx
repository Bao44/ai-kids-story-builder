import React from 'react'
import { NextUIProvider } from '@nextui-org/react'

function Provider({children}:{children: React.ReactNode}) {
  return (
    <div>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </div>
  )
}

export default Provider