import React, {Component} from 'react';
import Tech from "./tech";

class TechList extends Component {
    render() {
        return (
            <div className='d-flex flex-row m-2 flex-wrap justify-content-between'>
                <Tech techName='Java' noOfCollaborators='10'
                      techDescription='Java is a popular programming language, created in 1995.It is owned by Oracle, and more than 3 billion devices run Java.It is used for:Mobile applications (specially Android apps)Desktop applications'/>
                <Tech techName='JavaScript' noOfCollaborators='50'/>
                <Tech techName='NodeJS' noOfCollaborators='30'/>
                <Tech techName='React' noOfCollaborators='50'/>
                <Tech techName='Docker' noOfCollaborators='10'/>
                <Tech techName='MongoDB' noOfCollaborators='3'/>
            </div>
        );
    }
}

export default TechList;