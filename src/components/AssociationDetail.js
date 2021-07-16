import { Link } from 'react-router-dom';
import './AssociationDetail.css'

const AssociationDetail = (props) => {

  return (<>
    <article key={props.id}>
     
      <div className="container">

        <div className="product-info row">
          <div className="col-lg-8 col-md-12 col-xs-12">


            <div className="details-box" style={{"margin-top":"0px"}}>
              <div className="ads-details-info">
                <h1>{props.association_name}</h1>
                <div className="details-meta">
                  <span><a href="#"><i className="lni-map-marker"></i>  عمان</a></span>
                  <span><a href="#"><i className="lni-eye"></i>  مشاهدة {props.view}</a></span>
                  <span><a href="#"><i className="lni-calendar"></i> {props.update} أخر تعديل</a></span>
                </div>
              
                <h4 className="title-small mb-3">الأهداف:</h4>
                <p className="mb-4 the-objective">{props.vision_goals}</p>

                <h4 className="title-small mb-3">معلومات الجمعية:</h4>
                <ul className="list-specification">
                  <li><i className="lni-check-mark-circle"></i><span>سنة التأسيس:</span> {props.year_foundation}<span></span></li>
                  <li><i className="lni-check-mark-circle"></i> الفروع: {props.branches}</li>

                </ul>


              </div>
              <div className="tag-bottom">
                <div className="float-left">
                  <ul className="advertisement">
                    <li>
                      <p><strong><i className="lni-folder"></i> نوع المنظمة : </strong> <a href="http://www.civilsociety-jo.net/ar/organizations/15" target="_blank">{props.classification}</a></p>
                    </li>
                  </ul>
                </div>
                <div style={{"float":"left"}}>
                  <div className="share">
                    <div className="social-link">
                      <a className="facebook Sharefacebook thesharebuttons" data-toggle="tooltip" data-placement="top" link={props.website} title="" data-original-title=""><i className="lni-facebook-filled"></i></a>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">

            <aside className="details-sidebar">
              <div className="widget">

                <div className="agent-inner">

                  <div className="agent-title">
                    <div className="the-union-icon">
                      <img src={props.urlImage} className="img-thumbnail" alt="loyalty and affiliation " />
                    </div>
                    <div className="agent-details">
                      <h3><a href="#">{props.association_name}</a></h3>
                    </div>
                  </div>
                  <div className="the-contact-info"><a href={props.website} target="_blank"></a> <i className="lni-world"></i></div>
                  <div className="the-contact-info">{props.e_mail} <i className="lni-envelope"></i></div>
                  <div className="the-contact-info">{props.phone_number} <i className="lni-phone-handset"></i></div>
                  <div className="the-contact-info"> <i className="lni-phone">{props.fax_number} </i></div>
                  <div className="the-contact-info"> <i className="lni-postcard">{props.fax_number}</i></div>
                  <div className="the-contact-info">{props.governorate} -{props.city_village}- شارع {props.street}- رقم البناء {props.building_number}<i className="lni-map-marker"><a href="`https://www.google.com/maps/@!{props.google_maps_link},18z`" ></a></i></div>
                
                </div>
              </div>



            </aside>

          </div>
        </div>


      </div>
    </article>
    {  console.log("-------dddddddd----")}
  </>
  )
}

export default AssociationDetail
