import Header from "./header"
import Footer from "./footer"
import Side from "./side"
import Head from "next/head"
export default function Layout({children, title}) {
    return (
        <>
          <Header title={title}></Header>
          <Side></Side>
          <main>{children}</main>
          <Head>
            <title>这是一个title</title>
          </Head>
          <Footer></Footer>
        </>
    )
}