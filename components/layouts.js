import Footer from "./footer";
import Header from "./header";


export default function Layout({children, hero}) {
    return (
        <>
            <Header hero={hero}/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}