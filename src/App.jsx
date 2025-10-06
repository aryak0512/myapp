import './App.css'
import Header from "./components/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css"
import {Outlet} from "react-router-dom";

function App() {

    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );

}

export default App;
