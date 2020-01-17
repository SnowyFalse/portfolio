import React from 'react';
import '../CSS/Footer.css';


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

                <footer className="page-footer font-small bg-secondary text-light">
                    <div className="footer-copyright text-center py-3">© 2020 Copyright: Theresa Dietinger </div>

                </footer>

            </div>
        );
    }

}

export default ContactMe;