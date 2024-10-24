import './Home.css';
import HomeCarousel from '../components/HomeCarousel';
import aboutSquareImage from '../assets/StoreFront.jpg';
import menuImage from '../assets/MenuTacos.jpg';
import cateringImage from '../assets/CateringPizzaBirria.jpg';
import tacoPlateImage from '../assets/tacoPlateImage.png';



const Home = () => {

    return (
        <>

            <HomeCarousel />
            <div className='mainHomeOuterContainer'>
                <div className='mainHomeInnerContainer'>

                    <div className='threeSquares'>
                        <div className='menuSquare'>
                            <div className='imageDiv'>
                                <img className='image' src={cateringImage} />
                            </div>
                            <h2 className='overlayText'>Menu</h2>
                        </div>
                        <div className='aboutSquare'>
                            <div className='imageDiv'>
                                <img className='image' src={aboutSquareImage} />
                            </div>
                            <h2 className='overlayText' >About</h2>
                        </div>
                        <div className='cateringSquare'>
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
                        </div>
                    </div>




                </div>
            </div>
        </>
    )
};

export default Home