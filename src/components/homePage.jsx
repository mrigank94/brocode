import React, {Component} from 'react';
import TechList from "./techList";
import LeaderBoard from "./leaderBoard";

class HomePage extends Component {
    render() {
        return (
            <div className='d-flex flex-row m-2 justify-content-between'>
                <div style={{width: '60%', height: '700px'}}>
                    <TechList/>
                </div>
                <div style={{width: '30%', height: '700px'}}>
                    <LeaderBoard/>
                </div>
            </div>
        );
    }
}

export default HomePage;