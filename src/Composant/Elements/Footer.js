import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faSnapchat } from '@fortawesome/free-brands-svg-icons';
import React from "react";
import '../../css/Footer.css'

export function Footer() {
    
    const socialNetwork=[
        {url: "https://www.facebook.com/BeYourChief/" , icon:<FontAwesomeIcon className="links" icon={faFacebook} size="2x" />},
        {url: "https://twitter.com/?lang=fr", icon: <FontAwesomeIcon className="links" icon={faTwitter} size="2x" />},
        {url: "https://www.instagram.com/beyourchef7/", icon: <FontAwesomeIcon className="links" icon={faInstagram} size="2x" />},
        {url: "https://www.snapchat.com/l/fr-fr/", icon: <FontAwesomeIcon className="links" icon={faSnapchat} size="2x" />},
    ];
    const links= socialNetwork.map((rs)=><a key={rs.url} href={rs.url}>{rs.icon}</a>)
    return (
        <>
           <footer className="footer">
               <h5>Contact with US:</h5>
               <div className="links">{links}</div>
               
           </footer>
        </>
    );
}
export default Footer;