import { Link } from "react-router-dom";

export default function NavItems({ category, currentCategory }){
    return(
        <Link className={category === currentCategory ? "activeTab" : ""} to={`/${category}`}>{category}</Link>
    )
}