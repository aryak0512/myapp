import PageTitle from "./PageTitle.jsx";

export default function PageHeading({title, children}) { // destructuring props to get children
    return (
        <div className="page-heading-container">
            <PageTitle title={title}/>
            <p className="page-heading-paragraph">{children}</p>
        </div>
    );
}