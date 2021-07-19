import React, { Component } from 'react';
import Post from '../Post/Post';
import FullPost from '../FullPost/FullPost';
import './Blog.css';
import { connect } from 'react-redux'
import { getData } from '../../../store/actions/dataAction';
import * as actionTypes from '../../../store/types';
import FullFilter from '../../filters/fullFilter';
import { Link } from 'react-router-dom';
import Store from './../../../store/store';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false,
        postsFilter: [],
        selectedPostData: "",
        serachArr: [],
        selectLocation: "All",
        searchData: "",
        searchTarget: ["association_name", "vision_goals"],
        classificationArr: [],
        classification: "All"
    }

    componentDidMount() {
        this.props.getData();

        console.log("componentDidMount---")
        const store = Store;
        console.log(store.getState().data.data);
        store.subscribe(() => {

            const { data } = this.props.data;
            console.log(data);

            let arr = [];
            let arr2 = [];
            data.forEach((val, index, array) => {
                // console.log(val.governorate);
                if (arr.indexOf(val.governorate) == -1) {
                    arr.push(val.governorate);
                }
                if (arr2.indexOf(val.classification) == -1) {
                    arr2.push(val.classification);
                }
            });
            arr.sort();
            arr2.sort();
            this.setState({ serachArr: arr, classificationArr: arr2 });

            console.log('[Subscription-----]', store.getState());
        })
        this.setState({ posts: store.getState().data.data });
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
        return items.filter((row) => {

            if (row.governorate == this.state.selectLocation ||
                row.classification == this.state.classification ||
                (this.state.selectLocation == "All" && this.state.classification == "All")


            ) {
                return this.state.searchTarget.some(
                    (column) => {
                        return row[column].toString().indexOf(this.state.searchData) > -1
                    }
                )
            }

        }
        )
    }
    render() {
        let loaction = <div className="select"> <select onChange={e => { this.setState({ selectLocation: e.target.value }) }}
            className="custom-select" aria-label="Filter Locations" value={this.state.selectLocation}>
            <option value="All">جميع المواقع </option>
            {this.state.serachArr.map((item) => { return (<option value={item} key={Math.random() + item}>{item}</option>) })}
        </select>
            <span className="focus"></span>
        </div>
        let classific = <div className="select"> <select onChange={e => { this.setState({ classification: e.target.value }) }}
            className="custom-select" aria-label="Filter Locations" value={this.state.classification}>
            <option value="All">جميع الانواع </option>
            {this.state.classificationArr.map((item) => { return (<option value={item} key={Math.random() + item}>{item}</option>) })}
        </select>
            <span className="focus"></span>
        </div>
        let serachObj = <label htmlFor="search-form">
            <input type="search" name="search-form" id="search-form" className="search-input" placeholder="بحث عن ..." value={this.state.searchData} onChange={(e) => this.setState({ searchData: e.target.value })}
            />
            <span className="sr-only">
                Search countries here
            </span>
        </label>
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
                    <div className="search-wrapper">
                        {loaction}
                        {classific}
                        {serachObj}
                    </div>
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
const mapStateToProps = (state) => {
    return { ...state };

};
/*const mapDispatchToProps = dispatch => {
    return {
        getData: () => dispatch({type: actionTypes.GET_DATA})
    }
}*/


export default connect(mapStateToProps, { getData })(Blog);