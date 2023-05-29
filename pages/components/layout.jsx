import Header from "./header"
import Footer from "./footer"
import Side from "./side"
export default function Layout({children, title}) {
    return (
        <>
          <Header title={title}></Header>
          <div className="g_body">
            <Side></Side>
            <main className="g_main">{children}</main>
          </div>
          <Footer></Footer>
        </>
    )
}