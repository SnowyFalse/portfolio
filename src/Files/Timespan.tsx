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
                <h2>Education and career history</h2>
                <div className={"row"}>
                    <div className={"col-md-6"}>
                        <h4>Education</h4>
                        <p>
                            Since 2018: Business Software Development, University of Applied Science Campus 02 <br/>
                            2018: Graduation <br/>
                            2010-2018: WIKU Graz <br/>
                            2006-2010: Elementary School Hausmannstätten <br/>
                        </p>
                        <h4>Work experience</h4>
                        <p>
                            Since August 2019: Software Developer, DCCS GmbH <br/>
                            August 2017: 4 week internenship, DCCS GmbH <br/>
                        </p>
                    </div>
                    <a target={"_blank"} href={"https://www.dccs.at/"}>
                        <img src={"https://www.dccs.at/o/dccs-startpage-theme-1.0.0/images/logo_start.svg"} alt={"dcss logo"}/>
                    </a>
                    <a target={"_blank"} href={"https://www.campus02.at/"}>
                        <img src={"https://www.campus02.at/wp-content/uploads/2016/10/Logo.jpg"} alt={"campus02 logo"}/>
                    </a>
                </div>
            </div>
        );
    }

}

export default ContactMe;