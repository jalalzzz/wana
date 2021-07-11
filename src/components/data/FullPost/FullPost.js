import React, { Component } from 'react';
import axios from 'axios';
import { getDataById } from '../../../store/actions/dataAction';
import './FullPost.css';
import * as actionTypes from '../../../store/types';
import {connect} from 'react-redux';
class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidUpdate() {
       
        if (this.props.id!=null) {
            if (this.state.loadedPost) {
                console.log(this.state.loadedPost.id + "  " + this.props.id);
            }
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
               const data= this.props.getDataById(this.props.id);
               console.log(data);
                var obj = new Object();
                obj = data;
                obj["id"] = this.props.id;
                console.log(this.props.id);
                this.setState({ loadedPost: obj });

            }
        }
    }

    deletePostHandler = () => {
        axios.delete('https://csoproject-a9dbc-default-rtdb.firebaseio.com/association/' + this.props.id + ".json")
            .then(response => {
                console.log(response);
            });
    }

    render() {
        var object = ["association_name", "governorate", "city_village", "district", "street", "building_number", "zip_code", "google_maps_link", "branches", "phone_number", "fax_number", "e_mail", "website", "year_foundation", "classification", "vision_goals", "sector", "target_groups", "liaison_Officer", "project_name", "project_objective", "duration", "funded", "project_partners", "other_projects"];
        
        let tObj = "";

   
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if (this.props.id) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if (this.state.loadedPost) {
            tObj = object.map((post) => {
                console.log(this.state.loadedPost[post])

                return (<p><span> {post} :</span>{this.state.loadedPost[post]}</p>)
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


const mapStateToProps = (state) => ({ data: state.data });
const mapDispatchToProps = dispatch => {
    return {
        getDataById: (id) => dispatch({ type: actionTypes.GET_DATA, postId: id })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FullPost);;