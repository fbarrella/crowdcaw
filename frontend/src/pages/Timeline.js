import React, { Component } from 'react';
import api from '../services/api';
import socket from 'socket.io-client';

import ccLogo from '../twitter.svg';
import './Timeline.css';

import Caw from '../components/Caw';

export default class Timeline extends Component {
    state = {
        cawList: [],
        newCaw: ''
    };

    async componentDidMount() {
        this.subscribeToEvents();

        const response = await api.get('caws');

        if(response.data){
            this.setState({ cawList: response.data });
        }
    };

    subscribeToEvents = () => {
        const io = socket('http://localhost:3003');

        io.on('caw', data => {
            this.setState({ cawList: [data, ...this.state.cawList] });
        });

        io.on('fav', data => {
            this.setState({ cawList: this.state.cawList.map( caw => caw._id === data._id ? data : caw ) });
        });
    };

    handleInputChange = e => {
        this.setState({
            newCaw: e.target.value
        });
    };

    handleKeyPress = async e => {
        if(e.keyCode !== 13) return;

        if(!e.shiftKey){
            const author  = localStorage.getItem('@CrowdCaw:username');
            const desc = this.state.newCaw;
            e.preventDefault();

            api.post('caws', {
                author: author,
                desc: desc
            });

            this.setState({
                newCaw: ''
            });
        }
    };
  
    render() {
    return (
        <div className="timeline-wrapper">
            <img src={ccLogo} height={24} alt="CrowdCaw" />

            <form>
                <textarea 
                    value={this.state.newCaw} 
                    onChange={this.handleInputChange}
                    onKeyDown={this.handleKeyPress} 
                    placeholder="O que está na sua mente?"
                />
            </form>

            <ul className="tweet-list">
                { this.state.cawList.map(caw => (
                    <Caw key={caw._id} data={caw}/>
                )) }
            </ul>
        </div>
    );
  }
}
