import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from "../assets/logo.png";
import './Footer.css';

function Footer() {
return (
<footer className="footer">
    <div className="footer-container">
    <div className="footer-logo">
        <img src={logo} alt="Candid Realtor Logo" className="w-40  shrink-0" />
    </div>
    {/* <div className="footer-links">
        <a href="/">Home</a>
        <a href="/listings">Listings</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
    </div> */}
    <div className="footer-social">
        <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
        <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
        <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
    </div>
{/* Head Offices */}
    <div className="realtor-address">
    <div class="col-lg-3 col-md-2 col-6">
							<div class="widget clearfix">

								<h4 class="ls0 mb-4 nott text-black">Head Offices - Nairobi</h4>

								<ul class="list-unstyled ml-0 text-blue-300">
									<li class="mb-2"><a >Salama House, Mama Ngina Street, Wabera Street Junction</a></li>
									<li class="mb-2"><a >P.O. Box 17100 - 00100 Nairobi</a></li>
									<li class="mb-2"><a >Phone No: 0746 45 45 13</a></li>
									
								</ul>

							</div>
    </div>

    <div class="col-lg-3 col-md-2 col-6">
							<div class="widget clearfix">

								<h4 class="ls0 mb-4 nott text-black">Embakasi Area  Branch</h4>

								<ul class="list-unstyled ml-0 text-blue-300">
									<li class="mb-2"><a >Fedha Service Station Plaza, Ground Flr</a></li>
									<li class="mb-2"><a >P.O. Box 17100 - 00100 Nairobi</a></li>
									<li class="mb-2"><a >Phone No: 0701 40 44 40</a></li>
								</ul>

							</div>
    </div>

    <div class="col-lg-3 col-md-2 col-6">
							<div class="widget clearfix">

								<h4 class="ls0 mb-4 nott text-black">Kiambu Area Branch</h4>

								<ul class="list-unstyled ml-0 text-blue-300">
									<li class="mb-2"><a >Feruzi Towers, 2nd Flr</a></li>
									<li class="mb-2"><a >P.O. Box 17100 - 00100 Nairobi</a></li>
									<li class="mb-2"><a >Phone No: 0757 35 55 57</a></li>
								</ul>

							</div>
    </div>

    <div class="col-lg-3 col-md-2 col-6">
							<div class="widget clearfix">

								<h4 class="ls0 mb-4 nott text-black">Diaspora Liason</h4>

								<ul class="list-unstyled ml-0 text-blue-300">
									<li class="mb-2"><a >Phone No: +14 84-995-7841</a></li>
									<li class="mb-2"><a >Philadelphia,</a></li>
									<li class="mb-2"><a >USA</a></li>
								</ul>

							</div>
    </div>
    </div>


    
    

    </div>

{/* Social media  */}

    <div className="col-lg-4">
        <h3 className="footer-heading">Follow Us</h3>
        <ul className="list-unstyled social-media">
            <li className="">
            <a href="#">
                <FontAwesomeIcon icon={faFacebookF} />
            </a>
            </li>
            <li>
            <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            </li>
            <li>
            <a href="#">
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            </li>
            <li>
            <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            </li>

        
        </ul>
        </div>

{/* Footer Bottom */}

    <div className="footer-bottom">
    <p>&copy; 2023 Candid Realtor Company. All Rights Reserved.</p>
    </div>
</footer>
);
}

export default Footer;

// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import "./Footer.css";

// const Footer = () => {
// return (
// <footer className="real-estate-footer">
//     <div className="container">
//     <div className="row">
//         <div className="col-lg-4">
//         <h3 className="footer-heading">Contact Us</h3>
//         <ul className="list-unstyled">
//             <li>
//             <FontAwesomeIcon icon={faMapMarkerAlt} />
//             <span>123 Main St, Anytown USA</span>footer
//             </li>
//             <li>
//             <FontAwesomeIcon icon={faPhoneAlt} />
//             <span>(123) 456-7890</span>
//             </li>
//             <li>
//             <FontAwesomeIcon icon={faEnvelope} />
//             <span>info@realestate.com</span>
//             </li>
//         </ul>
//         </div>
//         <div className="col-lg-4">
//         <h3 className="footer-heading">Follow Us</h3>
//         <ul className="list-unstyled social-media">
//             <li>
//             <a href="#">
//                 <FontAwesomeIcon icon={faFacebookF} />
//             </a>
//             </li>
//             <li>
//             <a href="#">
//                 <FontAwesomeIcon icon={faTwitter} />
//             </a>
//             </li>
//             <li>
//             <a href="#">
//                 <FontAwesomeIcon icon={faLinkedinIn} />
//             </a>
//             </li>
//             <li>
//             <a href="#">
//                 <FontAwesomeIcon icon={faInstagram} />
//             </a>
//             </li>
//         </ul>
//         </div>
//         <div className="col-lg-4">
//         <h3 className="footer-heading">Newsletter</h3>
//         <form className="subscribe-form">
//             <div className="form-group">
//             <input type="email" className="form-control" placeholder="Your email address" />
//             <button type="submit" className="btn btn-primary">Subscribe</button>
//             </div>
//         </form>
//         </div>
//     </div>
//     </div>
// </footer>
// );
// };

// export default Footer;