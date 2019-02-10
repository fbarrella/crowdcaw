import React, { Component } from 'react';
import api from '../services/api';
import socket from 'socket.io-client';

import ccLogo from '../crowdcaw.svg';
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
        const io = socket('https://infinite-coast-29296.herokuapp.com/');

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
            e.preventDefault();
            await this.sendCaw();
        }
    };

    sendCaw = async () => {
        const author  = localStorage.getItem('@CrowdCaw:username');
        const desc = this.state.newCaw;

        await api.post('caws', {
            author: author,
            desc: desc
        });

        this.setState({
            newCaw: ''
        });
    };
  
    render() {
    return (
        <div className="timeline-wrapper">
            <div className="timeline-title">
                <img src={ccLogo} height={50} alt="CrowdCaw" />
                <h2>crowdcaw</h2>
            </div>

            <form>
                <textarea 
                    value={this.state.newCaw} 
                    onChange={this.handleInputChange}
                    onKeyDown={this.handleKeyPress} 
                    placeholder="O que está na sua mente?"
                />

                <button type="button" onClick={this.sendCaw}>
                    Enviar
                </button>
            </form>

            <ul className="tweet-list">
                { this.state.cawList.map(caw => (
                    <Caw key={caw._id} data={caw}/>
                )) }
            </ul>

            <h5>Feito por Felipe Barrella Netto em 2019.</h5>
        </div>
    );
  }
}
