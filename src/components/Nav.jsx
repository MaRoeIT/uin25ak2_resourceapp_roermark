import { resources } from "../assets/resources"

import NavItems from "./NavItems";

/**
 * styling for all tags of the navigation bar.
 */
import "../styles/nav.scss"

/**
 * a component that renders out the navigation bar.
 * @param {*} currentCategory the currently selected category. 
 * @returns a header and nav that contains a list of all the categories in the persistan storage.
 */
export default function Nav({ currentCategory }){
    /**
     * a variable that holds all the unique categories found in the persistant storage.
     */
    const categories = resources.map(resource => resource.category).filter((value, index, self) => self.indexOf(value) === index);

    return(
        <>
            <header>
                <nav>
                    <ul>
                        {/**
                         * maps out one navItem per category in the @var categories . 
                         */}
                        {categories.map((category, index) => <NavItems currentCategory={currentCategory} category={category} key={index}/>)}
                    </ul>
                </nav>
            </header>
        </>
    )
}