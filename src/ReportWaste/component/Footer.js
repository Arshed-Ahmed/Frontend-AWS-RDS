import React from "react";
import '../App.css';

function Footer() {
  return (
    <footer className="text-center text-lg-start text-muted pt-5">
        <section className="">
            <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                    
                </div>
            </div>
        </section>

        <div className="text-center p-4" id="footer-con">
            <div id="footer-social-icons" className="mb-4">
                <li className="list-inline-item">
                    <a className="px-1" href="linkedin.com"><i className="fab fa-linkedin-in fa-2x"></i></a>
                </li>
                <li className="list-inline-item">
                    <a className="px-1" href="twitter.com"><i className="fab fa-twitter fa-2x"></i></a>
                </li>
                <li className="list-inline-item">
                    <a className="px-1" href="youtube.com"><i className="fab fa-youtube fa-2x"></i></a>
                </li>
                <li className="list-inline-item">
                    <a className="px-1" href="facebook.com"><i className="fab fa-facebook fa-2x"></i></a>
                </li>
                <li className="list-inline-item">
                    <a className="px-1" href="instagram.com"><i className="fab fa-instagram fa-2x"></i></a>
                </li>
                <li className="list-inline-item">
                    <a className="px-1" href="whatsapp.com"><i className="fab fa-whatsapp fa-2x"></i></a>
                </li>
            </div>
            <div id="footer-nav-links" className="mb-4">
                <a href="/whatwedo">What we do</a>|
                <a href="/about">About Us</a>|
                <a href="/blog">Blog</a>|
                <a href="/privacyp">Privacy Policy</a>|
                <a href="/rwlogin">Admin</a>
            </div>
            {/* Copyright */}
            {/* <p className="copyright">
                © { new Date().getFullYear()} Copyright: <a className="text-reset fw-bold" href="https://www.adage.lk/">Adage Digital All rights reserved</a>
            </p> */}
        </div>
    </footer>
  );
}

export default Footer;
