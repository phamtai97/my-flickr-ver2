import React, {Component} from 'react';
import SearchInput from 'react-search-input'
import '../styles/search.css';
import iconSearch from '../resource/iconsearch.png';
import {withRouter} from "react-router-dom";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            searchItem:'',
        }
        this.searchUpdated = this.searchUpdated.bind(this);
        this.searchItems = this.searchItems.bind(this);
    }

    searchUpdated (item) {
        this.setState({searchItem: item});
    }
    
    searchItems(){
        this.props.history.push('/photos/tags/' + this.state.searchItem);
    }

    render() {
        return ( 
            <div className="search">
                <div className = "search-conatainer" >
                    <SearchInput className="search-input" onChange={this.searchUpdated} placehodler="tai" onKeyUp={(event) => {
                        if (event.key === 'Enter') {
                            this.searchItems();
                        }}}/>
                </div>
                <button className="btnSearch" onClick={this.searchItems}>
                    <img src={iconSearch}/>
                </button>
            </div>

        );
    }
}

export default withRouter(Search);
