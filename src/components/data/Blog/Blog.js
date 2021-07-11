import React, { Component } from 'react';


import Post from '../Post/Post';
import FullPost from '../FullPost/FullPost';
import './Blog.css';

import {connect} from 'react-redux'

import {getData} from '../../../store/actions/dataAction';
import * as actionTypes from '../../../store/types';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false,
        postsFilter:[]
    }

    componentDidMount () {
    this.props.getData();
    const {data} = this.props.data;
    this.setState({posts: data});
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render () {


       

        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
              //  console.log(post.id);
             
                return (<div className="container"> <div className="row">
                  <div className="d-none d-sm-block col-lg-4   page-sidebar">
                    <aside>
                        
                         </aside>
                    </div>
                    <div className="col-lg-8 col-md-12 col-xs-12 page-content"></div>
                       
                <Post 
                      {...post}  
                    key={"A"+post.id} 
                    title={post.association_name} 
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)} />
                </div>
            </div>
                    
                
             );
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                   <FullPost id={this.state.selectedPostId} />
                </section>
              
            </div>
        );
    }
}
const mapStateToProps  = (state) => ({data:state.data});
/*const mapDispatchToProps = dispatch => {
    return {
        getData: () => dispatch({type: actionTypes.GET_DATA})
    }
}*/


export default connect(mapStateToProps, {getData})(Blog) ;