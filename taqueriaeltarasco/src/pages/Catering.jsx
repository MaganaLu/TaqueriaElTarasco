import PageHeader from "../components/PageHeader";
import "./Catering.css";

import { useNavigate } from "react-router-dom";


const Portfolio = () => {
  const navigate = useNavigate();
  const handleGoToContact = () => navigate("/Contact");


  return (
    <>

      <PageHeader image='../assets/NatureImage.jpg' hText="Catering" />
      



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