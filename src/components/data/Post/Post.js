import React from 'react';

import './Post.css';

const post = (props) => (
    <div className="Post col-xs-6 col-sm-6 col-md-6 col-lg-4 thelist" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </div>
);

export default post;