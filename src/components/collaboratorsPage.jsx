import React, {Component} from 'react';

class CollaboratorsPage extends Component {
    render() {
        return (
            <>
                <div>
                    Collaborator Page
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