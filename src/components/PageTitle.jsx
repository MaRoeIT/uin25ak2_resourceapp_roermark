/**
 * Component for rendering out the title.
 * @param {*} category the category that the component should display. 
 * @returns a h2 tag with corresponding category text.
 */
export default function PageTitle({ category }){
    return <h2>{category}</h2>
}