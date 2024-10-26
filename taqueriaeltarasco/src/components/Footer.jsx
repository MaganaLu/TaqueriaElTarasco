import './Footer.css';
import youtubeIcon from '../assets/youtubeIcon.svg';
import facebookIcon from '../assets/facebookLogo.svg';
import instagramIcon from '../assets/instagramIcon.svg';


const Footer = () => {
    return (

        <footer>
            <div className="footer">
                <div className="row">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/people/Taqueria-El-Tarasco/61554178086102/?mibextid=LQQJ4d"><img src={facebookIcon} /></a>
                </div>

                <div className="row">
                    <p>{"Contact Us: (509) 470-6925"}</p>
                    <p>522 S Wenatchee Ave, Wenatchee, WA 98801</p>
                </div>

                <div className="row">
                    Site Designed by: Web Frontier Solutions LLC
                </div>
            </div>
        </footer>

    );
}

export default Footer;



