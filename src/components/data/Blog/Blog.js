import React, { Component } from 'react';


import Post from '../Post/Post';
import FullPost from '../FullPost/FullPost';
import './Blog.css';

import { connect } from 'react-redux'

import { getData } from '../../../store/actions/dataAction';
import * as actionTypes from '../../../store/types';
import FullFilter from '../../filters/fullFilter';
import { Link } from 'react-router-dom';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false,
        postsFilter: [],
        selectedPostData: "",
        serachArr: [],
        selectLocation: "All",
        selectSection: "All"

    }

    componentDidMount() {
        this.props.getData();
        const { data } = this.props.data;
        console.log(data);
        this.setState({ posts: data });
        let arr = [];
        data.forEach((val, index, array) => {
            console.log(val.governorate);
            if (arr.indexOf(val.governorate) == -1) {
                arr.push(val.governorate);
            }
        });
        arr.sort();
        this.setState( 
            { serachArr: arr });
    }

    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id });
        const data = this.props.data.data.filter((post) => {

            return id === post.id
        }

        );
        console.log(data);
        this.setState({ selectedPostData: data[0] });


    }
    filterHandler = () => {
        console.log("filterHandler");
    }

    search = (items) => {
        return items.filter((row) => (row.governorate == this.state.selectLocation || this.state.selectLocation == "All"))
    }
    render() {


        let loaction = <div className="select"> <select onChange={e => { this.setState({ selectLocation: e.target.value }) }}
            className="custom-select" aria-label="Filter Locations" value={this.state.selectLocation}>
            <option value="All">جميع المواقع </option>
            {this.state.serachArr.map((item) => { return (<option value={item} key={Math.random() + item}>{item}</option>) })}


        </select>
            <span className="focus"></span>
        </div>


        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        let fullPost = this.state.selectedPostData != "" ? <FullPost fullData={this.state.selectedPostData} id={this.state.selectedPostId} /> : "";
        if (!this.state.error) {
            posts = this.search(this.props.data.data).map(post => {
                //  console.log(post.id);

                return (


                    <li key={"hhhh" + post.id}>
                        <Link to={`/${post.association_name}`}>

                            <Post
                                {...post}

                                title={post.association_name}
                                author={post.author}
                                clicked={() => this.postSelectedHandler(post.id)} />
                        </Link>
                    </li>





                );
            });
        }

        return (
            <div>
                <section>
                {loaction}
                </section>
                <section className="Posts">


                

                    <ul className="card-grid">


                        {posts}
                    </ul>







                </section>
                <section>
                    {fullPost}
                </section>

            </div>
        );
    }
}
const mapStateToProps = (state) => ({ data: state.data });
/*const mapDispatchToProps = dispatch => {
    return {
        getData: () => dispatch({type: actionTypes.GET_DATA})
    }
}*/


export default connect(mapStateToProps, { getData })(Blog);