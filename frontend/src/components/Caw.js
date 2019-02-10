import React, { Component } from 'react';
import api from '../services/api';

import './Caw.css';

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
                
                <svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <title>Shape</title>
                    <g id="Desktop" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="lista" transform="translate(-421.000000, -381.000000)" fill="#657786" fillRule="nonzero">
                            <g id="Group" transform="translate(400.000000, 274.000000)">
                                <g id="Group-3">
                                    <g id="likes" transform="translate(21.000000, 107.000000)">
                                        <g id="icon-like">
                                            <path d="M7.00104493,14 L6.99129223,14 C5.19191919,13.9644708 0,8.9800148 0,4.25906736 C0,1.99111769 1.758969,0 3.76384535,0 C5.35910832,0 6.43190526,1.16950407 7.00034831,2.02072539 C7.5667015,1.17098446 8.63949843,3.2871148e-16 10.235458,3.2871148e-16 C12.2417276,3.2871148e-16 14,1.99111769 14,4.25980755 C14,8.97853442 8.80738419,13.9637306 7.00801115,13.9977794 L7.00104493,13.9977794 L7.00104493,14 Z M3.76454197,1.11102887 C2.31556949,1.11102887 1.0456287,2.58253146 1.0456287,4.26054774 C1.0456287,8.50925241 5.94636015,12.8438194 7.00174155,12.8897113 C8.06060606,12.8438194 12.9578544,8.5099926 12.9578544,4.26054774 C12.9578544,2.58253146 11.6886102,1.11102887 10.2396378,1.11102887 C8.47857889,1.11102887 7.49494949,3.2842339 7.48659004,3.30569948 C7.32636712,3.72168764 6.68129572,3.72168764 6.52037618,3.30569948 C6.50992685,3.28349371 5.52699408,1.11102887 3.76523859,1.11102887 L3.76454197,1.11102887 Z" id="Shape"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
                {data.favs}
            </button>
        </li>
    );
  }
}
