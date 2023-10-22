export const metadata = {
    title: 'Recipe Manager',
}

export default function RootLayout({ children }) {
    return <html>
        <body>
            {children}
        </body>
    </html>
}