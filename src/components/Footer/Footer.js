import React from 'react';
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./Footer.css";

function Footer(props) {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href='https://github.com/sophialai123' target="_blank"><GitHubIcon /></a>
        <a href='https://www.linkedin.com/in/sophia-lai-55a736220/' target="_blank"><LinkedInIcon /></a>
        <a href='https://twitter.com/home' target="_blank"><TwitterIcon /></a>
        <a href='https://www.instagram.com/sophia_lai123/' target="_blank"><InstagramIcon /></a>
        <a href='https://www.facebook.com/' target="_blank"><FacebookIcon /></a>





      </div>
      <p>&copy; {new Date().getFullYear()} Sophia Lai</p>

    </div>
  );
}

export default Footer;