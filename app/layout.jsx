import { NextUIProvider } from "../components/NextUIProvider"


export const metadata = {
    title: 'Recipe Manager',
}

export default function RootLayout({ children }) {
    return <html theme='dark'>
        <body>
            <NextUIProvider>
                {children}
            </NextUIProvider>
        </body>
    </html>
}