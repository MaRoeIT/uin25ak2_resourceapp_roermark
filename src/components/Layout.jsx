import Nav from "./Nav";

/**
 * Style for the more global styling of the site.
 */
import "../styles/layout.scss";

/**
 * component that renders out the larger parts of the site.
 * @param {*} children a resources component based on the site path.
 * @param {*} currentCategory the currently selected category.
 * @returns a Nav component and a main component containing resourses component.
 */
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