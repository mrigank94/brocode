import React, {Component} from 'react';
import queryString from "query-string";

class CollaboratorsPage extends Component {

    componentDidMount() {
        console.log(this.props);
        console.log(queryString.parse(this.props.location.search));
        const {tech, name} = queryString.parse(this.props.location.search);
        console.log(tech, name);
    }

    render() {
        return (
            <>
                <div>
                    Collaborator Page for {this.props.match.params.tech} by {this.props.match.params.name}
                </div>
                <button className='btn btn-info' onClick={this.handleClick}>Meeting</button>
            </>
        );
    }

    handleClick = () => {
        this.props.history.push({
            pathname: 'join'
        })
    };
}

export default CollaboratorsPage;