import React from 'react';
import '../CSS/App.css';
import Navbar from "./Navbar";
import Home from "./Home";

interface Props {

}

export class App extends React.Component<Props, {}> {

    constructor(props: any) {
        super(props);
        this.state = {};

    }

    handleClick() {
    }

    render() {
        return (
            <div>
                <Navbar/>
                <Home/>
            </div>
        );
    }

}

export default App;
