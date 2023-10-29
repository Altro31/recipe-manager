
import '@/styles/tailwind.css'
import {NextUIProvider} from "../components/NextUIProvider";
import Nav from "../components/Nav";

export const metadata = {
    title: 'Recipe Manager',
}

export default function RootLayout({ children }) {
    return <html theme='dark' lang="en">
        <body>
            <NextUIProvider>
                <Nav />
                {children}
            </NextUIProvider>
        </body>
    </html>
}