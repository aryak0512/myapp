import PageTitle from "./PageTitle.jsx";

export default function PageHeading({title, children}) { // destructuring props to get children
    return (
        <div className="text-center max-w-[576px] mx-auto px-4 py-6">
            <PageTitle title={title}/>
            <p className="font-primary leading-6 text-gray-600">{children}</p>
        </div>
    );
}