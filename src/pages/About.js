import React from "react";
import '../custom.css';
import '../App.css';
import { Row,Col } from "react-bootstrap";
import NewNav from "./components/RepNav";
import Footer from "./components/RepFooter";
import cover from "../asset/img/Group 4859.png";
import img1 from "../asset/img/NoPath - Copy (61).png" ;
import Card1 from "../asset/img/NoPath - Copy (62).png";
import Card2 from "../asset/img/NoPath - Copy (64).png" ;
import Card3 from "../asset/img/NoPath - Copy (65).png";
import Card4 from "../asset/img/NoPath - Copy (11).png";

function About() {
  return (
    <>
    <div className="container">
        <Col className="content">
            <NewNav activepath="/about" />
            <Row style={{justifyContent:'center'}}>
              <div className="container">
                  <div className="row">
                      <div className="position-relative">
                          <img src={cover} alt="About Us" className="img-fluid" />
                          <h3 className="position-absolute image-centered-text">About Us</h3>
                      </div>
                  </div>
                <section className="bg-light p-3 mb-5 mt-4">
                    <div className="row ">

                        <div className="col-md-5" style={{marginTop: '70px'}}>
                            <img className=" img-fluid" src={img1} alt="" />
                        </div>

                        <div className="col-md-7">
                            <div className="float-right text-dark ps-5 mt-3 ">
                                <h4 className="text-dark mt-5"> What is Report Waste?</h4>
                                <p className="text-dark para-line" style={{fontSize: '13px'}}>
                                Report Waste has set up a system for the collection and transport of mixed and biodegradable municipal waste. 
                                The principal objectives were to tackle the problem of illegal dumping in the area and to remove illegal dumping sites. 
                                Report Waste uses special algorithms to analyse data from fly tipping incident reports, 
                                whilst acting as a support tool for governing bodies to ensure incidents are dealt with in timely fashion.  
                                These reports can be shared with relevant bodies, that will help highlight areas that can be improved.
                                The portal also increases awareness.  
                                This will give users an understanding on the past data and statistics of fly tipping incidents. 
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="mt-5"></div>

                    <h4 className="text-dark mt-5"> Awards</h4>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card border-0">
                                <img className="card-img-top" src={Card1} alt="Card 1" />
                                <div className="card-body">
                                    <h5 className="card-title text-dark text-center">Innovation Of The Year</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card border-0">
                                <img className="card-img-top" src={Card2} alt="Card 2" />
                                <div className="card-body">
                                    <h5 className="card-title text-dark text-center">Performer Of The Year</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card border-0">
                                <img className="card-img-top" src={Card3} alt="Card 3" />
                                <div className="card-body">
                                    <h5 className="card-title text-dark text-center">Rising star of the year</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card border-0">
                                <img className="card-img-top" src={Card4} alt="Card 4" />
                                <div className="card-body">
                                    <h5 className="card-title text-dark text-center">Golden Holder Of The Year</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
              </div>
            </Row>
        </Col>
    </div>
    <Footer />
    </>
  );
}

export default About;
