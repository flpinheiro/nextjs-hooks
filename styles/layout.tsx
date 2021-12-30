import Head from "next/head"
import { ReactNode } from "react";
const name = 'Your Name'
export const siteTitle = 'Next.js Sample Website'

const Layout = ({ children, home }: { children: ReactNode, home?: boolean }) => (
    <div>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="description"
                content="Learn how to build a personal website using Next.js"
            />
            <meta
                property="og:image"
                content={`https://og-image.vercel.app/${encodeURI(
                    siteTitle
                )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <header>
            {home ? (<div>home</div>) : (<div></div>)}
        </header>

        <main className="container">{children}</main>
    </div>
)

export default Layout;