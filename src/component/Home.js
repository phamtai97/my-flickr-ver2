import React, {Component} from 'react';
import '../styles/home.css';
import Explore from '../component/Explore.js';

const width = window.innerWidth
class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ( 
            <div className = "Home" >
                <div className = "main-home">
                    <marquee width={width} direction="left" behavior="sroll" scrollamount="15">Welcome to My Flickr</marquee>
                </div>
            </div>
        );
    }
}

export default Home;
