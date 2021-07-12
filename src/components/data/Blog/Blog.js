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
        postsFilter:[],
        selectedPostData: ""

    }

    componentDidMount () {
    this.props.getData();
    const {data} = this.props.data;
    console.log(data);
    this.setState({posts: data});
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
        const data=this.props.data.data.filter((post)=>{
         
            return id===post.id}
            
            );
            console.log(data);
        this.setState({selectedPostData: data[0]});
      
        
    }

    render () {


       


        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        let fullPost= this.state.selectedPostData!=""? <FullPost fullData={this.state.selectedPostData} id={this.state.selectedPostId}     />:"";
        if (!this.state.error) {
            posts = this.props.data.data.map(post => {
              //  console.log(post.id);
             
                return (
                <Post 
                      {...post}  
                    key={post.id} 
                    title={post.association_name} 
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)} />
        
                    
                
             );
            });
        }

        return (
            <div>
                <section className="Posts">

                <div className="container"> <div className="row">
                  <div className="d-none d-sm-block col-lg-4   page-sidebar">
                    <aside>
                        
                         </aside>
                    </div>
                    <div className="col-lg-8 col-md-12 col-xs-12 page-content">

                    {posts}
                    </div>

                    </div>
            </div>
                       
                  
                </section>
                <section>
                {fullPost}
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