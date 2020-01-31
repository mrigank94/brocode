import React, {Component} from 'react';
import Tech from "./tech";

const TechList = (props) => {
    const techs = props.techs;
    const onHClick = props.onHClick;
    return (
        <div className='d-flex flex-row m-2 flex-wrap justify-content-between'>
            {techs.map(tech =>
                <Tech techName={tech.name} noOfCollaborators={tech.collaborators}
                      techDescription={tech.description} onTLClick={onHClick}/>
            )}
        </div>
    );
};

export default TechList;