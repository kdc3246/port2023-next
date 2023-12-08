import "@/assets/scss/style.scss";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";

export const metadata = {
  title: "정보보호학과 종합 플랫폼 🥹 JB",
  description: "이 플랫폼이 바로 여러분들의 웹 개발 능력을 한 단계 끌어올릴 수 있는 곳입니다.",
  keywords: ["정보보호학과", "리액트", "뷰", "넥스트", "portfolio", "react.js", "vue.js", "next.js", "jb"],
}

export default function RootLayout({ children }) {
  return (
      <ClerkProvider>
        <html lang="ko">
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
          <body>
          <Header />
            <main className="container">
            <div className="flex items-start justify-center min-h-screen">
              <div className="mt-20">{children}</div>
            </div>
            </main>
          </body>
        </html>
      </ClerkProvider>
  )
}
