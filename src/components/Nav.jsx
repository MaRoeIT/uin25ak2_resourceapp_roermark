import NavItems from "./NavItems";
import { resources } from "../assets/resources"
import "../styles/nav.scss"

export default function Nav({ currentCategory }){
    const categories = resources.map(resource => resource.category).filter((value, index, self) => self.indexOf(value) === index);

    return(
        <>
            <header>
                <nav>
                    <ul>
                        {categories.map((category, index) => <NavItems currentCategory={currentCategory} category={category} key={index}/>)}
                    </ul>
                </nav>
            </header>
        </>
    )
}