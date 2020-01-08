import React from 'react';
import './CSS/Navbar.css';
import AboutMe from './Files/AboutMe';
import Home from './Files/Home';
import ContactMe from "./Files/ContactMe";

const Router = require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;
const Link = require("react-router-dom").Link;

interface State {
    home: boolean;
    aboutMe: boolean;
    contactMe: boolean;
}

export class Navbar extends React.Component<{}, State> {

    constructor(props: any) {
        super(props);
        this.state = {
            home: true,
            aboutMe: false,
            contactMe: false
        };
    }


    render() {
        return (
            <header>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                      crossOrigin="anonymous"/>
                <Router>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light custom">
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <Link to="/" className="nav-link ">Home </Link>
                                </li>
                                <li className="nav-item active" >
                                    <Link to="/aboutMe" className="nav-link ">About me </Link>
                                </li>
                                <li className="nav-item active">
                                    <Link to="/contactMe" className="nav-link ">Contact me </Link>
                                </li>

                            </ul>
                        </div>
                    </nav>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/aboutMe" component={AboutMe}/>
                    <Route exact path="/contactMe" component={ContactMe}/>

                </Router>
            </header>
        );
    }

}

export default Navbar;
