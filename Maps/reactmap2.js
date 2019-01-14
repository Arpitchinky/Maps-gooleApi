import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';



import { GoogleComponent } from 'react-google-location'

//...



const API_KEY = "AIzaSyD0LffT5nyQbbj_EfmB6CuNh7wZqUDBHGU"; // how to get key - step are below

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            place: null,
        };
    }

    render() {
        console.log("result return here", this.state.place)
        return (
            <div >
                <GoogleComponent

                    apiKey={API_KEY}
                    language={'en'}
                    country={'country:in|country:us'}
                    coordinates={true}
                    //locationBoxStyle={'custom-style'}
                    //locationListStyle={'custom-style-list'}
                    onChange={(e) => { this.setState({ place: e }) }} />
            </div>

        )
    }
}


export default App;
