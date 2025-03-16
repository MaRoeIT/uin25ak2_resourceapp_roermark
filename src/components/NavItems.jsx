import { Link } from "react-router-dom";

/**
 * renders out one item for the navbar.
 * @param {*} category the category of this spesific navItem.
 * @param {*} currentCategory the category currently selected by the user.
 * @returns a Link with the category text.
 */
export default function NavItems({ category, currentCategory }){
    return(
        /**
         * Creates a link to this components category 
         * and puts a class activeTab for styling on this if @var categroy and @var currentCategory is equal.
         * the class is used to style the navItem that corresponds to the currentCategory.
         */
        <Link className={category === currentCategory ? "activeTab" : ""} to={`/${category}`}>{category}</Link>
    )
}