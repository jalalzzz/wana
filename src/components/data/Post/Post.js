import React from 'react';

import './Post.css';

const post = (props) => (


<div className="card" key={props.id}  onClick={props.clicked}>
                <div className="card-image">
                    <img src={props.urlImage} alt={props.association_name} width="100" height="100"/>
                </div>
                <div className="card-content">
                    <h3 className="card-name">
                        {props.association_name}
                    </h3>
                    <ol className="card-list">
                      
                        <li>الموقع: <span>{props.governorate}</span></li>
                       
                    </ol>
                </div>
            </div>

        
    
      
   
);

export default post;