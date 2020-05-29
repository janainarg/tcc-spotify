import React from 'react';
import './card.css';
import 'bootstrap/dist/css/bootstrap.css';

export function Card({ items }) {

    return (

        <div class="card">
            <div class="card-body">
                <img class="aspect" src={items.images[2].url} />
                <h2 className="title-artists">
                    {items.name}
                </h2>           
            </div>
        </div>
    )
}