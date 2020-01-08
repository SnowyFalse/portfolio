import React from 'react';
import '../CSS/AboutMe.css';


interface Props {

}

export class AboutMe extends React.Component<Props, {}> {

    constructor(props: any) {
        super(props);
        this.state = {};

    }

    render() {
        return (
                <div className="row">
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
                          integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
                          crossOrigin="anonymous"/>
                    <div className="sidebar text-center">
                        <h3>Facts</h3>
                        <i className="fas fa-user"></i> 19 years old <br/>
                        <i className="fas fa-laptop-code"></i> Software Developer <br/>
                        <i className="fas fa-running"></i> Climbing trainer <br/>
                        <i className="fas fa-phone"/> +43 699 13115276 <br/>
                        <i className="fas fa-envelope"></i> theresa.dietinger@gail.com <br/>
                        <i className="fas fa-home"></i> Dorfstraße 34, 8071 Hausmannstätten <br/>
                        <i className="fas fa-building"></i> DCCS GmbH <br/>
                    </div>
                    <div className="content">
                        <h2>About me</h2>
                        <p>I already discovered my passion for software development at a young age. While playing video
                            games I always tried to find out how the game developers implemented certain game aspects
                            and tried to forecast what would happen next. In seventh grade I decided to research
                            about how game elements like leader boards or level separations affect the players
                            motivation and how these acquirements can be used in peoples daily life.
                            <br/>
                            This information was then put into my<span className={"bold"}> VWA </span>(a kind of
                            academic paper that is mandatory in order to graduate in Austria).
                            <br/><br/>
                            After my graduation of the WIKU BRG I decided to  start the bachelors degree
                            <span className={"bold"}>"Business Software Development"</span> at Campus 02. During the first summer
                            break I also started a <span className={"bold"}> part time job as a software developer at
                            the company "DCCS" </span>. Since October I am part of a project that aims to create a
                            platform to assist the support team of <span className={"bold"}> Porsche </span> at their
                            daily work.
                        </p>
                        <h2>Future</h2>
                        <p>
                            In the future I am looking forward to finishing my bachelors degree and starting the masters
                            degree "Computer Science" at the University of Technology at Graz. During this time I plan
                            to create projects and gather experience on what I find most interesting about software
                            development. With the know-how I would either like to start working in the field of web or
                            game development or continue my education at the University of Applied Science at Salzburg
                            where I can specialize even more.
                        </p>

                    </div>
                </div>
        );
    }

}

export default AboutMe;