import {useRouteError} from "react-router-dom";

export default function ErrorPage() {

    // prebuilt hook
    const routeError = useRouteError()

    return <div>

        <p>{routeError.data}</p>
        <p>{routeError.status}</p>

    </div>;
}