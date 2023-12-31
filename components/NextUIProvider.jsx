// app/providers.tsx
'use client'

import { NextUIProvider as Provider } from '@nextui-org/react'

export function NextUIProvider({ children }) {
    return (
        <Provider className='w-full h-full'>
            {children}
        </Provider>
    )
}