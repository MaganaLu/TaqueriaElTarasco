import { useNavigate } from "react-router-dom";

import './Home.css';
import HomeCarousel from '../components/HomeCarousel';
import aboutSquareImage from '../assets/StoreFront.jpg';
import menuImage from '../assets/MenuTacos.jpg';
import cateringImage from '../assets/CateringPizzaBirria.jpg';
import tacoPlateImage from '../assets/tacoPlateImage.png';



const Home = () => {

    const navigate = useNavigate();
    const handleShowNewPage = (pageString) => {navigate(pageString)};

return (
    <>

        <HomeCarousel />
        <div className='mainHomeOuterContainer'>
            <div className='mainHomeInnerContainer'>

                <div className='threeSquares'>

                    <div onClick={()=>handleShowNewPage("Menu")} className='menuSquare'>
                        <div className='imageDiv'>
                            <img className='image' src={cateringImage} />
                        </div>
                        <h2 className='overlayText'>Menu</h2>
                    </div>

                    <div onClick={()=>handleShowNewPage("About")} className='aboutSquare'>
                        <div className='imageDiv'>
                            <img className='image' src={aboutSquareImage} />
                        </div>
                        <h2 className='overlayText' >About</h2>
                    </div>

                    <div onClick={()=>handleShowNewPage("Catering")} className='cateringSquare'>
                        <div className='imageDiv'>
                            <img className='image' src={menuImage} />
                        </div>
                        <h2 className='overlayText'> Catering</h2>
                    </div>

                </div>

                <div className='welcomeDiv'>
                    <img className='image' src={tacoPlateImage} />
                    <div className='welcomeDivText'>
                        <h1>Welcome!</h1>
                        <p>Welcome to Taqueria El Tarasco, a culinary oasis nestled in the heart of Wenatchee. Our esteemed establishment is dedicated to curating an exquisite dining experience steeped in the rich tapestry of authentic Mexican cuisine. With a commitment to culinary excellence and a reverence for tradition, we invite you to embark on a delicious journey that celebrates the diverse flavors and heritage of Mexico.</p>
                        <button>More About Us</button>
                    </div>
                </div>

                

                <div className='bottomDiv'>
                    <h1>Tacos and More!</h1>
                    <p>
                        At Taqueria El Tarasco, our offerings extend far beyond just tacos, although our tacos are undeniably exceptional! Our menu boasts an array of Mexican culinary essentials and traditional favorites to delight your palate
                    </p>
                    <button>View Menu</button>
                </div>
                <hr />



            </div>
        </div>
    </>
)
};

export default Home