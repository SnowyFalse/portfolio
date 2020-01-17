import React from 'react';
import '../CSS/ContactMe.css'


interface Props {

}

export class ContactMe extends React.Component<Props, {}> {

    constructor(props: any) {
        super(props);
        this.state = {
        };
    }



    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                      crossOrigin="anonymous"/>
                <h2>Skills</h2>
                <div className={"row"}>
                    <div className={"col-md-4 text-center"}>
                        <a target="_blank" href={"https://www.w3schools.com/html/"}>
                            <img src={"https://freeiconshop.com/wp-content/uploads/edd/html-flat.png"}/>
                        </a>
                        <p>
                            HTML (short for HyperText Markup Language) defines the structure and layout of a Web
                            document by using a variety of tags and attributes.
                            HyperText is the method by which you move around on the web — by clicking on special text
                            called hyperlinks. Markup is what HTML tags do to the text inside them.
                        </p>
                    </div>
                    <div className={"col-md-4 text-center"}>
                        <a target="_blank" href={"https://www.w3schools.com/css/"}>
                            <img src={"https://freeiconshop.com/wp-content/uploads/edd/css-flat.png"}/>
                        </a>
                        <p>
                            Cascading Style Sheets (CSS) is a style sheet language used for describing presentation of
                            Web pages, including colors, layout, and fonts.
                        </p>
                    </div>
                    <div className={"col-md-4 text-center"}>
                        <a target="_blank" href={"https://www.javascript.com/"}>
                            <img src={"https://freeiconshop.com/wp-content/uploads/edd/js-flat.png"}/>
                        </a>
                        <p>
                            JavaScript is a dynamic programming language. It most commonly used as a part of web pages,
                            whose implementations allow client-side script to interact with the user and make dynamic pages.
                        </p>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-md-4 text-center"}>
                        <a target="_blank" href={"https://reactjs.org/"}>
                            <img src={"https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png"}/>
                        </a>
                        <p>
                            React (also known as React. js or ReactJS) is a JavaScript library for building
                            interfaces. It encourages the creation of reusable UI components, which present data that
                            changes over time.
                        </p>
                    </div>
                    <div className={"col-md-4 text-center"}>
                        <a target="_blank" href={"https://www.typescriptlang.org/"}>
                            <img src={"https://image.flaticon.com/icons/png/512/919/919832.png"}/>
                        </a>
                        <p>
                            Typescript is a strict syntactical superset of JavaScript, and adds optional static typing
                            to the language.
                        </p>
                    </div>
                    <div className={"col-md-4 text-center"}>
                        <a target="_blank" href={"https://www.java.com/de/download/"}>
                            <img src={"https://cdn1.iconfinder.com/data/icons/system-shade-circles/512/java-512.png"}/>
                        </a>
                        <p>
                            Java is a programming language expressly designed for use in the distributed environment of
                            the internet. Java can be used to create complete applications that may run on a single
                            computer or be distributed among servers and clients in a network.
                        </p>
                    </div>
                </div>
                <div id={"time"}/>
            </div>
        );
    }

}

export default ContactMe;