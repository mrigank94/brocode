import React, {Component} from 'react';
import TechList from "./techList";
import LeaderBoard from "./leaderBoard";
import techs from "../data/technologies";

class HomePage extends Component {
    render() {
        return (
            <div className='d-flex flex-row m-2 justify-content-between'>
                <div style={{width: '60%', height: '700px'}}>
                    <TechList techs={techs} onHClick={this.handleClick}/>
                </div>
                <div style={{width: '30%', height: '700px'}}>
                    <LeaderBoard/>
                </div>
            </div>
        );
    }

    handleClick = () => {
        console.log('Join button clicked');
        this.props.history.push({
            pathname: 'tech-details'
        });
    };


}

export default HomePage;