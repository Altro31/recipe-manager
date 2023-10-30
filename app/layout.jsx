import '@/styles/tailwind.css'
import {NextUIProvider} from "../components/NextUIProvider";
import Nav from "../components/Nav";
import {Provider} from "../components/Context";

export const metadata = {
    title: 'Recipe Manager',
}

export default function RootLayout({children, recipe}) {
    return <html lang="en" className="w-full h-full">
    <body className="w-full h-full">
    <NextUIProvider>
        <Provider>
            <div className='w-full h-full flex flex-col'>
                <Nav/>
                {children}
                {recipe}
            </div>
        </Provider>
    </NextUIProvider>
    </body>
    </html>
}