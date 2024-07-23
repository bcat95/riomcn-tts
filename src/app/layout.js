import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'RioMCN Văn bản thành Lời nói',
    description: 'Công cụ chuyển văn bản thành lời nói tài trợ bởi RioMCN',
}

export default function RootLayout({ children }) {
    return (
        <html lang="vi">
        <body className={inter.className}>{children}</body>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-JFEPJSWCC6" type="5c49018d3e49504d1839206d-text/javascript"></script>
        <script type="5c49018d3e49504d1839206d-text/javascript">
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-JFEPJSWCC6');
        </script>
        </html>
    )
}