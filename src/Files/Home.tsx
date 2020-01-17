import React from 'react';
import '../CSS/App.css';
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Timespan from "./Timespan";

interface Props {

}

 class App extends React.Component<Props, {}> {

    constructor(props: any) {
        super(props);
        this.state = {};

    }


    render() {
        // TODO Up button, link to id smooth
        return (
            <div>
               <div className={"bg"}>
                   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                         integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                         crossOrigin="anonymous"/>

                   <div className={"App-header"}>
                       <h1> Theresa Dietinger </h1>
                       <h3> Software Development </h3>
                   <div  id={"info"} className={"bottom"}/>
                   </div>
               </div>
                <div className={"info"}>
                    <AboutMe/>
                </div>
                <div className={"skills"} >
                    <Skills/>
                </div>
                <div className={"time"} >
                    <Timespan/>
                </div>


            </div>
        );
    }

}

export default App;

/*
 <div className={"bg"}>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                      crossOrigin="anonymous"/>

                <div className={"App-header"}>
                    <h1> Theresa Dietinger </h1>
                    <h3> Of Climbing and Code </h3>
                </div>
                <div className="App">
                    <div className={"col-lg-4"}>
                        <label> Test </label>
                        <div className={"progress"}>
                            <div className={"progress-bar"} role={"progressbar"} style={{width: "25%"}}
                                 aria-valuenow={75} aria-valuemin={0}
                                 aria-valuemax={100}/>
                        </div>
                    </div>
                </div>
            </div>
 */
