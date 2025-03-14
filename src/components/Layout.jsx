import Nav from "./Nav";
import "../styles/layout.scss";

export default function Layout({ children, currentCategory }){
    return(
        <>
            <Nav currentCategory={currentCategory}/>
            <main>
                {children}
            </main>
        </>
    )
}