import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gifs: [],
            selectedGifId: '7gHvotF7oLVie8AStr'
        }
    }

    search = (query) => {
        giphy("TAjjbsgF0gf1oPUA4mFqQ1QxbQoXzCjA").search({
            q: query,
            rating: 'g',
        }, (error, result) => {
            this.setState({
                gifs: result.data
            }); 
        });
    }

    render() {
		return (
            <div>
                <div className="left-scene">
                <SearchBar searchFunction={this.search}/>
                    <div className="selected-gif">
                        <Gif id={this.state.selectedGifId}/>
                    </div>
                </div>
                <div className="right-scene">
                    <GifList gifs ={this.state.gifs} />
                </div>
            </div>
        )
    }
}

export default App;
