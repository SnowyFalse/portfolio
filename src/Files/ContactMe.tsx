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
                <h2>Skills</h2>
                <div>
                    <img src={"https://freeiconshop.com/wp-content/uploads/edd/html-flat.png"}/>
                    <img src={"https://freeiconshop.com/wp-content/uploads/edd/css-flat.png"}/>
                    <img src={"https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png"}/>
                    <img src={"https://image.flaticon.com/icons/png/512/919/919832.png"}/>
                    <img src={"https://cdn1.iconfinder.com/data/icons/system-shade-circles/512/java-512.png"}/>
                    <img src={"https://freeiconshop.com/wp-content/uploads/edd/js-flat.png"}/>
                    <img src={"https://freeiconshop.com/wp-content/uploads/edd/php-flat.png"}/>

                </div>

            </div>
        );
    }

}

export default ContactMe;