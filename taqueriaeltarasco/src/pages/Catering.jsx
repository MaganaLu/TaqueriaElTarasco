import PageHeader from "../components/PageHeader";
import "./Catering.css";

import { useNavigate } from "react-router-dom";

import kitchenBg from '../assets/kitchenBg.jpg';


const Portfolio = () => {
  const navigate = useNavigate();
  const handleGoToContact = () => navigate("/Contact");


  return (
    <>

      <PageHeader image='../assets/NatureImage.jpg' hText="Catering" />
      <div className='aboutOuterContainer'>
        <div className='aboutInnerContainer'>

          <div className='storyContainer'>
            <h1>Services</h1>
            <hr />
            <p>We offer Catering for parties, ceremonies, gatherings and more. We provide and set everything up for you. We cook eveything fresh at the location and provide salsas and garnishes. </p>
          </div>

          <div className='mottoContainer'>
            <h1>Contact Us</h1>
            <hr />
            <p>Call us for a free estimate at 509-470-6925.</p>
          </div>
        </div>

        <div className='aboutBottomDiv'>
          <div className='aboutImageDiv'>
            <img className='aboutImage' src={kitchenBg} />
          </div>
          <div className='aboutOverlayText'>
            <h1> Authentic Michoacan Tacos</h1>
            <p1>We utilize premium cuts of meat and the freshest ingredients to craft our salsas and prepare all our meals from scratch on a daily basis</p1>
          </div>

        </div>

      </div>



{/*
      <div className="portfolioCardContainer">
        {golfCourseEntries.map(portfolioEntry =>
          <ul key={portfolioEntry.title} className="ulPortfolio">
            <PortfolioCardComponent description={portfolioEntry.description} video={portfolioEntry.video_url} title={portfolioEntry.title} date={portfolioEntry.date} image={portfolioEntry.image} type={portfolioEntry.type} />
          </ul>
        )}
      </div>

*/}



    </>
  )
};

export default Portfolio