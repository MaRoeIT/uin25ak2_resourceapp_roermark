import { Link, useParams } from "react-router-dom";
import { resources } from "../assets/resources";
import { useEffect } from "react";

import PageTitle from "./PageTitle";

/**
 * the sass styling for all tags related to the main content on the site.
 */
import "../styles/resources.scss"

/**
 * A component for rendering out the main content of the site.
 * @param {*} setCurrentCategory sets the @var currentCategory useState. 
 * @returns an article tag with a PageTitle component, 
 * a ul list with all the content for the current category.
 */
export default function Resources({ setCurrentCategory }){
    /**
     * a useParam to get the first segment of the path aviable through @var category .
     */
    const { category } = useParams();
    /**
     * a useEffect that updatetes the @var currentCategory useState on first render and whenever @var category changes.
     */
    useEffect(()=>setCurrentCategory(category),[category])
    /**
     * variable that holds the content with the selected category.
     */
    const categoryContent = resources.filter((resource) => category === resource.category);
    

    return(
        <article>
            {/**
             * a component for rendering the title of the page based on @var category .
             */}
            <PageTitle category={category}/>
            <ul>
                {/**
                 * checks if the @var categoryContent has content, 
                 * if it has content it creates a list point and a a tag for each content aviable.
                 * if there is no content it outputs that the category don't exist 
                 * and a link to get back to the default selected category.
                 */}
                {categoryContent.length > 0 ? categoryContent.map((content, index) => 
                    <li key={index}>
                        <Link to={content.url}>{content.title}</Link>
                    </li>
                    )
                    :
                    <>
                        <li>
                            The category doesn't exist, please choose a valid category
                        </li>
                        <li>
                            <Link to={"/html"}>Go back</Link>
                        </li>
                    </>
                }
            </ul>
        </article>
    )
}

