import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullFilter extends Component {
    state = {
        loadedPost: null
    }




    render () {
      var object = ["association_name","governorate","city_village","district","street","building_number","zip_code","google_maps_link","branches","phone_number","fax_number","e_mail","website","year_foundation","classification","vision_goals","sector","target_groups","liaison_Officer","project_name","project_objective","duration","funded","project_partners","other_projects"];
      console.log(this.state.loadedPost)
      let tObj="";

      
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if ( this.props.id ) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if ( this.state.loadedPost ) {
            tObj=object.map((post)=>{
                console.log(this.state.loadedPost[post])
     
                return(<p><span> {post} :</span>{this.state.loadedPost[post]}</p>) 
             })
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.association_name}</h1>
                {tObj}
                 
                </div>

            );
        }
        return post;
    }
}

export default FullFilter;