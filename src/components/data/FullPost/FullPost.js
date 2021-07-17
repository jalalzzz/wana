import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';


class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidUpdate() {
      
    }

    deletePostHandler = () => {
        axios.delete('https://csoproject-a9dbc-default-rtdb.firebaseio.com/association/' + this.props.id + ".json")
            .then(response => {
                console.log(response);
            });
    }

    render() {
        var object = ["association_name", "governorate", "city_village", "district", "street", "building_number", "zip_code", "google_maps_link", "branches", "phone_number", "fax_number", "e_mail", "website", "year_foundation", "classification", "vision_goals", "sector", "target_groups", "liaison_Officer", "project_name", "project_objective", "duration", "funded", "project_partners", "other_projects"];
        
        let tObj = [];

   
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if (this.props.id) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if ( this.props.fullData) {
          //  console.log( this.props.fullData);
            var keys = Object.keys( this.props.fullData);
            for (var i=0; i<keys.length; i++) {
             //   console.log( keys[i], this.props.fullData[keys[i]]);
                tObj.push(<p key={keys[i]} ><span> {keys[i]} :</span>{this.props.fullData[keys[i]] }</p>)
            }
         /*   tObj = Object.keys(this.props.fullData).map(function(key,index) {
                console.log(key,this.props.fullData[key[i]]);
             //   return <option value={key}>{tifs[key]}</option>
            //    return (<p><span> {key} :</span>{ }</p>)
           });*/

           
            post = (
                <div className="FullPost">
                    <h1>{ this.props.fullData['association_name']}</h1>
                    {tObj}

                </div>

            );
        }
        return post;
    }
}



export default FullPost;