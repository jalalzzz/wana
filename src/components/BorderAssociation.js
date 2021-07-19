import React, { Component } from 'react';
import Btn from './Btn';
import AssociationDetail from './AssociationDetail';
import Loading from './Loading';
import Error from './Error';
import { Link } from 'react-router-dom';
import { IoArrowBackOutline } from 'react-icons/io5';
import { connect } from 'react-redux';
import { getData } from '../store/actions/dataAction';
import firebase from 'firebase';
import Store from './../store/store';

const icon = <IoArrowBackOutline size={18} />;

class BorderAssociation extends Component {


  state = {
    error: null,
    isLoaded: false,
    items: [],
    posts: [],
    paramName:window.location.pathname,
    selectedPostId: null,

    postsFilter: [],
    selectedPostData: ""

  }
  componentDidMount() {
    this.props.getData();
    const { data } = this.props.data;
    console.log(data);
    this.setState({ items: data,isLoaded: true });
    console.log("componentDidMount--");

  

    console.log(Store.getState());
    Store.subscribe(() => {
      console.log(Store.getState());
      this.setState({ items: Store.getState().data.data });
    })
  }



  render() {

    if (this.state.error) {
      return (
        <>
          <div className="search-wrapper" >
           /* <Link to={'/'}>
              <Btn text={icon} altText="Back" className="btn" />
            </Link>*/
          </div>
          <Error text={this.props.match.params.name} msg={this.state.error.message} />
        </>
      )
    } else if (!this.state.isLoaded) {
      return (
        <>
          <div className="search-wrapper">
            <Link to={'/'}>
              <Btn text={icon} altText="Back" className="btn" />
            </Link>
          </div>
          <Loading text={this.props.match.params.name} />
        </>
      )
    } else {
      //    var object = ["association_name", "governorate", "city_village", "district", "street", "building_number", "zip_code", "google_maps_link", "branches", "phone_number", "fax_number", "e_mail", "website", "year_foundation", "classification", "vision_goals", "sector", "target_groups", "liaison_Officer", "project_name", "project_objective", "duration", "funded", "project_partners", "other_projects"];
      return (
        <>
          <div className="search-wrapper">
            <Link to={'/'}>
              <Btn text={icon} altText="Back" className="btn" />
           
            </Link>
      
          </div>

          {this.state.items.map(item => {
           
            if (item.association_name == this.props.match.params.name) {

              const updates = {};
              updates['/association/' + item.id+'/view'] = (+item.view+1);
           
            
               firebase.database().ref().update(updates);


         
              console.log(item.association_name+" <<<-------- "+this.props.match.params.name)
              return <AssociationDetail key={"asd"+item.id}
                urlImage={item.urlImage}
                association_name={item.association_name}
                governorate={item.governorate}
                city_village={item.city_village}
                district={item.district}
                street={item.street}
                building_number={item.building_number}
                zip_code={item.zip_code}
                google_maps_link={item.google_maps_link}
                branches={item.branches}
                phone_number={item.phone_number}
                fax_number={item.fax_number}
                e_mail={item.e_mail}
                website={item.website}
                year_foundation={item.year_foundation}
                classification={item.classification}
                vision_goals={item.vision_goals}
                sector={item.sector}
                target_groups={item.target_groups}
                liaison_Officer={item.liaison_Officer}
                project_name={item.project_name}
                project_objective={item.project_objective}
                duration={item.duration}
                funded={item.funded}
                project_partners={item.project_partners}
                other_projects={item.other_projects}
                view={item.view}
                update={item.update}

              />
            }
          })
          }
        </>
      );
    }
  }
}

const mapStateToProps = (state) => ({ data: state.data });

export default connect(mapStateToProps, { getData })(BorderAssociation)
