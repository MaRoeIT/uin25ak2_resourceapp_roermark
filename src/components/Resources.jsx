import { Link, useParams } from "react-router-dom";
import { resources } from "../assets/resources";
import PageTitle from "./PageTitle";
import "../styles/resources.scss"
import { useEffect } from "react";

export default function Resources({ setCurrentCategory }){
    const { category } = useParams();
    useEffect(()=>setCurrentCategory(category),[category])
    const categoryContent = resources.filter((resource) => category === resource.category);
    

    return(
        <article>
            <PageTitle category={category}/>
            <ul>
                {categoryContent.length > 0 ? categoryContent.map((content, index) => 
                    <li key={index}>
                        <a href={content.url}>{content.title}</a>
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

