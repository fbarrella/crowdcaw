import React, { Component } from 'react';
import api from '../services/api';

import './Caw.css';
import favIcon from '../like.svg';

export default class Caw extends Component {
    handleFav = async () => {
        const { _id } = this.props.data;

        await api.post(`fav/${_id}`);
    };

  render() {
    const { data } = this.props;

    return (
        <li className="tweet">
            <strong>{data.author}</strong>

            <p>{data.desc}</p>

            <button type="button" onClick={this.handleFav}>
                <img src={favIcon} alt="Fav this caw!" />
                {data.favs}
            </button>
        </li>
    );
  }
}
