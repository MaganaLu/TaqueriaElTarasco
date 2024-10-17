import './Footer.css';
import youtubeIcon from '../assets/youtubeIcon.svg';
import facebookIcon from '../assets/facebookLogo.svg';
import instagramIcon from '../assets/instagramIcon.svg';


const Footer = () => {
    return (

        <footer>
            <div className="footer">
                <div className="row">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/"><img src={youtubeIcon} /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=61565934830066"><img src={facebookIcon} /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=61565934830066"><img src={instagramIcon} /></a>

                </div>

                <div className="row">
                    <p>{"Contact Us: 509) 387 - 9799"}</p>
                </div>

                <div className="row">
                    Web Frontier Solutions LLC
                </div>
            </div>
        </footer>

    );
}

export default Footer;



