import React, {Component} from 'react';
import queryString from "query-string";
import collaboratorData from "../data/collaborators.json";
import Collaborator from "./collaborator";
import query from "querystring";

class CollaboratorsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collaborators: []
        }
    }

    componentDidMount() {
        const {tech} = queryString.parse(this.props.location.search);
        const collaborators = this.findCollaborators(tech);
        this.setState({collaborators});
    }

    findCollaborators(tech) {
        for (let i = 0; i < collaboratorData.length; i++) {
            if (collaboratorData[i].techName === tech) {
                return collaboratorData[i].collaborators;
            }
        }
    }

    render() {
        const collaborators = this.state.collaborators;
        return (
            <>
                {collaborators.map(collaborator => <Collaborator name={collaborator.name}
                                                                 rating={collaborator.rating}
                                                                 aboutMe={collaborator.aboutMe}
                                                                 onClick={this.handleClick}/>
                )}
            </>
        );
    }

    handleClick = (name) => {
        this.props.history.push({
            pathname: 'join',
            search: query.stringify({name})
        })
    };
}

export default CollaboratorsPage;