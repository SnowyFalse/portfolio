import React from 'react';
import '../CSS/Navbar.css';


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
                    <nav className="navbar navbar-expand-lg navbar-light bg-light custom fixed-top">
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a href={"#top"} className="nav-link "><i className="fas fa-home"></i> </a>
                                </li>
                                <li className="nav-item active" >
                                    <a href={"#info"} className="nav-link ">About me </a>
                                </li>
                                <li className="nav-item active">
                                    <a href={"#skills"} className="nav-link ">Skills </a>
                                </li>
                                <li className="nav-item active">
                                    <a href={"#time"} className="nav-link ">Education und Work </a>
                                </li>
                                <li className="nav-item active">
                                    <a href={"mailto:theresa.dietinger@gmail.com"} className="nav-link ">Contact me </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
            </header>
        );
    }

}

export default Navbar;
