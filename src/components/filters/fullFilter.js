import React, { Component } from 'react';


import './FullFilter.css';

class FullFilter extends Component {
    state = {
        loadedPost: null
    }




    render () {
      var object = ["association_name","governorate","city_village","district","street","building_number","zip_code","google_maps_link","branches","phone_number","fax_number","e_mail","website","year_foundation","classification","vision_goals","sector","target_groups","liaison_Officer","project_name","project_objective","duration","funded","project_partners","other_projects"];
     

      
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if ( this.props.data ) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if ( this.state.loadedPost ) {
          
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.association_name}</h1>
             
                 
                </div>

            );
        }
        return post;
    }
}

export default FullFilter;