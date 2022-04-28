import React from "react";
import '../App.css';
import { Row,Col } from "react-bootstrap";
import Cover from "../assets/img/Group 4858.png";
import Footer from "../component/Footer";
import NewNav from "../component/NewNav";

function PrivacyPolicy() {
  return (
    <div className="container">
        <Col className="content">
            <NewNav activepath="/privacyp" />
            <Row style={{justifyContent:'center'}}>
              {/* Content */}
              <div className="container">
                <div className="row">
                    <div className="position-relative">
                        <img src={Cover} alt="" className="img-fluid" />
                        <h3 className="position-absolute image-centered-text">Privacy Policy</h3>
                    </div>
                </div>
                <section className="bg-light p-3 mb-5 mt-4">

                            <div className="row ">
                        <div className="col-md-12">
                            <h5>Privacy Policy</h5>
                            <p className="text-dark" style={{fontSize: '13px;'}}>
                                When you use Report Waste services, you trust us with your information. 
                                This Privacy Policy is meant to help you understand what data we collect, 
                                why we collect it, and what we do with it. 
                            </p>
                            <p className="text-dark" style={{fontSize: '13px;'}}>
                                This Privacy Policy outlines our guidelines for the information Report Waste collects when You interact with Report Waste, 
                                such as when You visit our Website, when You use the products and services, 
                                when you contact our customer support (collectively “services“).
                                In accessing the Websites and using our Services You accept all the terms and conditions (Terms of use) of this Privacy Policy. 
                                You also agree that Report Waste may amend and/or revise this Privacy Policy at its discretion, 
                                and You agree to be bound by these revisions and amendments. 
                                If You do not agree with the terms and conditions of this Privacy Policy we request that You immediately cease using and accessing the services.  
                            </p>
                        </div>
                    </div>
                    <div className="mt-5"></div>


                    <div className="row ">
                        <div className="col-md-12">
                            <h5>Information we collect</h5>
                            <p className="text-dark" style={{fontSize: '13px;'}}>
                                We collect information in the following ways:
                            </p>

                            <p className="text-dark" style={{fontSize: '13px;'}}>
                                Information you give us. For example, you can use our services, 
                                Report Waste without an account, but we ask you to sign up for Report Waste account to enjoy all features there are. 
                                When you register, we’ll ask for personal information, like your first name, 
                                last name and email address, social media links to your profiles, birthday, language preference. 
                                If you want to take full advantage of the features we offer, we might also ask you to fill in other details in your account to create full profile, such as photo, telephone number, organizations you are part of, your preferences such as if you want to be part of cleaning events or organize cleaning event yourself. 
                                Information we get from your use of our services. 
                                We collect information about the services that you use and how you use them. 
                                We collect this information no matter if you are registered user or use mobile app as an anonymous user.
                                This information includes:

                            </p>
                        </div>
                    </div>


                    <div className="mt-5"></div>
                    <div className="row ">
                        <div className="col-md-12">
                            <h5>Device information</h5>
                            <p className="text-dark" style={{fontSize: '13px;'}}>
                                We collect device-specific information (such as your hardware model, 
                                operating system version, unique device identifiers, language). 
                                Device-level settings: Your device may have controls that determine what information we collect.
                                For example, you can modify location settings on your device.
                            </p>
                        </div>
                    </div>


                    <div className="mt-5"></div>


            <div className="row ">
                <div className="col-md-12">
                    <h5>Log information</h5>
                    <p className="text-dark" style={{fontSize: '13px;'}}>
                        When you use our services or view content provided by Google, 
                        we automatically collect and store certain information in server logs. 
                        This includes: details of how you used our service
                        device event information such as crashes, system activity, 
                        hardware settings, browser type, browser language, the date and time of your request and referral URL.

                    </p>
                </div>
            </div>

            <div className="mt-5"></div>
                    <div className="row ">
                        <div className="col-md-12">
                            <h5>Location information</h5>
                            <p className="text-dark" style={{fontSize: '13px;'}}>
                                When you use Report Waste services, we may collect and process information about your actual location. 
                                We use various technologies and sensors to determine location, including IP address,
                                GPS, time, wifi.                </p>
                        </div>
                    </div>

                    <div className="mt-5"></div>
                    <div className="row ">
                        <div className="col-md-12">
                            <h5>Local storage </h5>
                            <p className="text-dark" style={{fontSize: '13px;'}}>
                                We may collect and store information (including personal information) locally 
                                on your device using mechanisms such as browser web storage (including HTML 5) and application data caches.
                            </p>
                        </div>
                    </div>

                </section>
            </div>
              <Footer />
            </Row>
        </Col>
    </div>
  );
}

export default PrivacyPolicy;
