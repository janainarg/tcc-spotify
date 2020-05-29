import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from '../../components/card/card.component';
import './top-artists.css';

export function TopArtists() {

    const [itemsSpotify, setItemsSpotify] = useState([]);

    useEffect(()=> {
        axios({
            method: 'get',
            url: 'https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=10&offset=5',
            headers: {
                Authorization: `Bearer ${getHashParams().access_token}`
            }
        }).then(function (response) {
            setItemsSpotify(response.data.items);
        });
    },[])

   

    function getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        e = r.exec(q)
        while (e) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
            e = r.exec(q);
        }
        return hashParams;
    }

    const renderCards = () => {
        return itemsSpotify.map((artists) => {
            return (<Card items={artists} />);
        })
    }

    return (
        <div className="top-artists">
            <section class="section-title">
                <h1 className="title">
                    Meus artistas favoritos
                </h1>
            </section>
            {renderCards()}
        </div>

    )
}