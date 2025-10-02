import PageHeading from "./PageHeading.jsx";

export default function Home() {
    return (
        <div className="home-container">
            <PageHeading title="Welcome to Our Website!">
                This the content sent by home going to be accessed as children by the child component "ie. PageHeading"
            </PageHeading>
        </div>
    )
}