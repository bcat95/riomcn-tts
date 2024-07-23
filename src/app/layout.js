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
        </html>
    )
}