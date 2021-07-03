import React, { Component } from 'react';
import axios from 'axios';

import Post from '../Post/Post';
import FullPost from '../FullPost/FullPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount () {

        axios.get( 'https://csoproject-a9dbc-default-rtdb.firebaseio.com/association.json' )
            .then( response => {
                const posts = response.data;
                console.log(posts);
                let postsArray=[];


                const updatedPosts = Object.keys(posts).map(function(key, index) {
                    var obj=new Object();
                    obj=posts[key]
                    obj["id"]=key;
                    postsArray.push(obj);
                   // console.log(postsArray.length);
                   

                 
                  });
                
                this.setState({posts: postsArray});
                console.log( response );
            } )
            .catch(error => {
                console.log(error);
                this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
             
                return <Post 
                      {...post}  
                    key={post.id} 
                    title={post.association_name} 
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)} />;
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

export default Blog;