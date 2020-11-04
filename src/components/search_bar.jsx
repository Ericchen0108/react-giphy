import React, { Component } from 'react';

class Searchbar extends Component {
    handleUpdate = (event) => {
        this.props.searchFunction(event.target.value);
        
    }

    render() {
        console.log("SEARCH BAR RENDER!")
        return (
            <input type="text" className="form-control form-search" onChange={this.handleUpdate}/>
        )
    }
}

export default Searchbar;
